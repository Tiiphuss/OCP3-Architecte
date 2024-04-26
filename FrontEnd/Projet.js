const reponse = await fetch("http://localhost:5678/api/works/");
const works = await reponse.json();

async function AfficheWorks(works) {
    
    for (let i = 0; i < works.length; i++) {

        const gallery = document.querySelector(".gallery");             //Récupération DOM gallerie//

        const figure = document.createElement("figure");                //Création balise figure//

        const image = document.createElement("img");                    //Création balise img avec source et alt//
        image.src = works[i].imageUrl;
        image.alt = works[i].title;

        const caption = document.createElement("figcaption");           //Création balise figcaption avec titre//
        caption.innerText = works[i].title;


        gallery.appendChild(figure)                              
        figure.appendChild(image)                                       //Implémentation dans le DOM//
        figure.appendChild(caption)
    }
    
}

AfficheWorks(works);


let gallery = document.querySelector(".gallery")                                       //Récupération de la div gallery//
let portfolio = document.querySelector("#portfolio");                                  //Récupération de l'id Portfolio//
let divBouton = document.createElement("div");                                         //Création div où placer les boutons//
divBouton.classList.add("divBouton")

portfolio.insertBefore(divBouton, gallery)                                             //Insertion de la div AVANT la gallerie//

//Création et insertion des boutons//
let bouton = document.createElement("button");
bouton.innerHTML = "Tout";
bouton.classList.add("Tout")

divBouton.appendChild(bouton);

let bouton2 = document.createElement("button");
bouton2.innerHTML = "Objets";
bouton2.classList.add("Objets")

divBouton.appendChild(bouton2);

let bouton3 = document.createElement("button");
bouton3.innerHTML = "Appartements";
bouton3.classList.add("Appart")

divBouton.appendChild(bouton3);

let bouton4 = document.createElement("button");
bouton4.innerHTML = "Hôtels & Restaurants"
bouton4.classList.add("HR")

divBouton.appendChild(bouton4);
//Création et insertion des boutons//



const BoutonTout = document.querySelector(".Tout");


    BoutonTout.addEventListener("click", function() {
        document.querySelector(".gallery").innerHTML = '';
        AfficheWorks(works)
});


const BoutonObjets = document.querySelector(".Objets");


    BoutonObjets.addEventListener("click", function () {
        const WorksObjets = works.filter(function (works) {                                        //Bouton Objets//
        return works.categoryId == 1;
    });
    document.querySelector(".gallery").innerHTML = '';
    AfficheWorks(WorksObjets)
});


const BoutonAppart = document.querySelector(".Appart")


    BoutonAppart.addEventListener("click", function() {
        const WorksAppart = works.filter(function (works) {
        return works.categoryId == 2;    
    });
    document.querySelector(".gallery").innerHTML = '';
    AfficheWorks(WorksAppart)
});


const BoutonHR = document.querySelector(".HR")


    BoutonHR.addEventListener("click", function() {
        const WorksHR = works.filter(function (works) {
        return works.categoryId == 3;    
    });
    document.querySelector(".gallery").innerHTML = '';
    AfficheWorks(WorksHR)
});
//Fin boutons//

let token = window.localStorage.getItem("token");

if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4") {
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
} else {                                                                                  //Si il y a un token, cacher "login" et afficher "logout"//
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
}

const logout = document.querySelector(".logout")

logout.addEventListener("click", function() {
    window.localStorage.removeItem("token");
    token = null
    document.getElementById("login").style.display = "block";                             //Clic sur "logout" => suppression du token et réaffichage de "login"//
    document.getElementById("logout").style.display = "none";
    console.log(token)
});































