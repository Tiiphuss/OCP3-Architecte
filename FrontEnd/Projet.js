let reponse = 0
let data = 0

async function RecupWorks() {
    try {
        let reponse = await fetch("http://localhost:5678/api/works");
        let data = await reponse.json();
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}

RecupWorks();

let contenuCaption = data.title
let sourceimg = data.imageUrl

let figure = `
       
        <figure>
            <img src= ${sourceimg} alt= ${contenuCaption}>
            <figcaption>${contenuCaption}</figcaption>
        </figure>
       
    `;


    let gallery = document.querySelector(".gallery")
    gallery.innerHTML = figure