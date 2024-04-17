async function RecupWorks() {
    const reponse = await fetch("http://localhost:5678/api/works/");
    const works = await reponse.json();

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

RecupWorks();


let gallery = document.querySelector(".gallery")
let portfolio = document.querySelector("#portfolio");
let divBouton = document.createElement("div");

portfolio.insertBefore(divBouton, gallery)


let bouton = document.createElement("button");
bouton.innerText = "Tout";

divBouton.appendChild(bouton);





















