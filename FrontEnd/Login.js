const Form = document.querySelector(".form")

Form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputEmail = document.getElementById("email");
    let inputMdp = document.getElementById("mdp");
    let email = inputEmail.value;
    let mdp = inputMdp.value;

    const Test = {
        email,
        mdp
    };
    
    const chargeUtile = JSON.stringify(Test)
    console.log(chargeUtile)

fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: chargeUtile
});
});

