const Form = document.querySelector(".form")

Form.addEventListener("submit", async function (event) {
    event.preventDefault();

    let inputEmail = document.getElementById("email");
    let inputMdp = document.getElementById("mdp");                            //Lorsque l'on appuie sur le bouton submit-Récupération email+mdp et POST//
    let email = inputEmail.value;
    let password = inputMdp.value;

    const Test = {
        email,
        password
    };
    
    const chargeUtile = JSON.stringify(Test)

let Try = fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },                               //POST Vérif email+mdp//
    body: chargeUtile
});
let response = await Try                                                           //Attente de la réponse//

let divErreur = document.querySelector(".erreur")                                  //Sélection div msg ERREUR ou CONNEXION//

if(response.status == "404") {
    console.log("ERREUR : Cet utlisateur n'existe pas")
    const Erreur404 = document.createElement("p") 
    Erreur404.innerText = "ERREUR : Cet utlisateur n'existe pas"                       //Erreur 404 console + affichage sur site//
    divErreur.innerHTML = ""
    divErreur.appendChild(Erreur404)
}

if(response.status == "401") {
    console.log("ERREUR : Email ou Mot de passe incorrect")
    const Erreur401 = document.createElement("p")
    Erreur401.innerText = "ERREUR : Email ou Mot de passe incorrect"                   //Erreur 401 console + affichage sur site//
    divErreur.innerHTML = ""
    divErreur.appendChild(Erreur401)
}

if(response.status == 200) {
    console.log("Vous êtes connecté et allez être redirigé")
    const userId = 1
    const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"

    const connexion = document.createElement("h3")
    connexion.innerText = "Vous êtes connecté et allez être redirigé"                  //Connexion réussie console + affichage site, enregistrement Token et UserId//
    divErreur.innerHTML = ""
    divErreur.appendChild(connexion)

    setTimeout(function () {
        document.location.href= "index.html";                                          //Attente de 3s avant redirection//
      }, 3000);
}
});

