fetch("http://localhost:5678/api/works");




let contenuCaption = "Abajour Tahina"

let figure = `
       
        <figure>
            <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
            <figcaption>${contenuCaption}</figcaption>
        </figure>
       
    `;


    let gallery = document.querySelector(".gallery")
    gallery.innerHTML = figure