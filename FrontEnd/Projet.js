let token = window.localStorage.getItem("token");

if ((token == null)) {
  document.querySelector("#login").style.display = "block";
  document.querySelector("#logout").style.display = "none";     //Si il y a un token, cacher "login" et afficher "logout"//
  document.querySelector("#btnModifier").style.display = "none";
} else {
  document.querySelector("#login").style.display = "none";
  document.querySelector("#logout").style.display = "block";
  document.querySelector("#btnModifier").style.display = null;
}

async function afficheWorks(works) {
  for (let i = 0; i < works.length; i++) {
    const gallery = document.querySelector(".gallery"); //Récupération DOM gallerie//

    const figure = document.createElement("figure"); //Création balise figure//

    const image = document.createElement("img"); //Création balise img avec source et alt//
    image.src = works[i].imageUrl;
    image.alt = works[i].title;

    const caption = document.createElement("figcaption"); //Création balise figcaption avec titre//
    caption.innerText = works[i].title;

    gallery.appendChild(figure);
    figure.appendChild(image); //Implémentation dans le DOM//
    figure.appendChild(caption);
  }
}

//Création et insertion des boutons//
async function creeBouton() {
  const categories = await getCategories();
  const gallery = document.querySelector(".gallery"); //Récupération de la div gallery//
  const portfolio = document.querySelector("#portfolio"); //Récupération de l'id Portfolio//
  const divBouton = document.createElement("div"); //Création div où placer les boutons//
  divBouton.classList.add("divBouton");
  if (token != null) {divBouton.style.display = "none"}
  portfolio.insertBefore(divBouton, gallery); //Insertion de la div AVANT la gallerie//

  const boutonTout = document.createElement("button");
  boutonTout.innerHTML = "Tout";
  boutonTout.classList.add("Tout");
  divBouton.appendChild(boutonTout);
  
  const BoutonTout = document.querySelector(".Tout");

  BoutonTout.addEventListener("click", async function () {
    document.querySelector(".gallery").innerHTML = "";
    const works = await getWorks();
    afficheWorks(works); 
  });

  for (let i = 0; i < categories.length; i++) {
    let bouton = document.createElement("button");
    bouton.innerHTML = categories[i].name;
    divBouton.appendChild(bouton);
    
    bouton.addEventListener("click", async function () {
      const works = await getWorks();
      const worksTrier = works.filter(function (works) {
        return works.category.id == [i + 1];
      });
      document.querySelector(".gallery").innerHTML = "";
      afficheWorks(worksTrier);
    });
  }
}
//Fin boutons

const logout = document.querySelector(".logout");

logout.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  token = null;
  document.getElementById("login").style.display = "block"; //Clic sur "logout" => suppression du token et réaffichage de "login"//
  document.getElementById("logout").style.display = "none";
  document.querySelector("#btnModifier").style.display = "none";
  if (token == null) {document.querySelector(".divBouton").style.display = null}
});

//fonction works modale//
const worksModale = function (works) {
  for (let i = 0; i < works.length; i++) {
    const modaleWorks = document.querySelector(".works-modale");

    const figure = document.createElement("figure");
    figure.classList.add("figureModale")

    const image = document.createElement("img");
    image.src = works[i].imageUrl;

    const cliquable = document.createElement("button");
    cliquable.classList.add("suppr" + (i))
    

    const poubelle = document.createElement("i");
    poubelle.classList.add("fa-solid", "fa-trash-can");

    modaleWorks.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(cliquable);
    cliquable.appendChild(poubelle);
  }
  const figs = document.querySelectorAll(".figureModale")

  for (let i = 0; i < figs.length; i++) {
    document.querySelector(".suppr" + i).addEventListener("click", function() {
    fetch("http://localhost:5678/api/works/" + (i+1), {
      method: "DELETE",
      headers: {Authorization: 'Bearer token'}
    });
    });
  };
};

async function init() {
  const works = await getWorks();
  const categories = await getCategories();
  afficheWorks(works);
  creeBouton(); 
  worksModale(works);
}

init();
