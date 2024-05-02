async function AfficheWorks(works) {
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
function CreeBouton(categories, works) {
    const gallery = document.querySelector(".gallery"); //Récupération de la div gallery//
    const portfolio = document.querySelector("#portfolio"); //Récupération de l'id Portfolio//
    const divBouton = document.createElement("div"); //Création div où placer les boutons//
    divBouton.classList.add("divBouton");
    portfolio.insertBefore(divBouton, gallery); //Insertion de la div AVANT la gallerie// 

    const boutonTout = document.createElement("button")
    boutonTout.innerHTML = "Tout"
    boutonTout.classList.add("Tout")
    divBouton.appendChild(boutonTout)
    const BoutonTout = document.querySelector(".Tout");

    BoutonTout.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    AfficheWorks(works);
});

    for (let i = 0; i < categories.length; i++) {
        let bouton = document.createElement("button");
        bouton.innerHTML = categories[i].name;
        divBouton.appendChild(bouton);
        bouton.addEventListener("click", function () {
            const worksTrier = works.filter(function (works) {
                return works.category.id == [i + 1];
            });    
            document.querySelector(".gallery").innerHTML = "";
            AfficheWorks(worksTrier)
        });
    }
}
//Fin boutons

let token = window.localStorage.getItem("token");

if (token = true) {
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "block";                                   //Si il y a un token, cacher "login" et afficher "logout"//
  console.log(token)
} else {
  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none"; 
}

const logout = document.querySelector(".logout");

logout.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  token = null;
  document.getElementById("login").style.display = "block";                            //Clic sur "logout" => suppression du token et réaffichage de "login"//
  document.getElementById("logout").style.display = "none";
  console.log(token);
});

//fonction works modale//
const worksModale = function (works) {
  for(let i = 0; i < works.length; i++) {
    const modaleWorks = document.querySelector(".works-modale");

    const figure = document.createElement("figure")

    const image = document.createElement("img");
    image.src = works[i].imageUrl;

    const cliquable = document.createElement("a")
    cliquable.setAttribute("href", "#");

    const poubelle = document.createElement("i")
    poubelle.classList.add("fa-solid", "fa-trash-can", "fa-sm")

    modaleWorks.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(cliquable)
    cliquable.appendChild(poubelle);
  }
}



async function init() {
  const works = await getWorks();
  const categories = await getCategories()
  AfficheWorks(works);
  CreeBouton(categories, works)
  worksModale(works)
}

init();
