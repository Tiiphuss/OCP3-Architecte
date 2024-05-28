let modal = null
let modal2 = null

const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    target.removeAttribute("aria-hidden")
    target.setAttribute("aria-modal", "true")
    modal = target
    modal.addEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").addEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
}

const openModal2 = function (e) {
    e.preventDefault()
    const target2 = document.querySelector(e.target.getAttribute("href"))
    target2.style.display = null
    target2.removeAttribute("aria-hidden")
    target2.setAttribute("aria-modal", "true")
    modal2 = target2
    modal2.addEventListener("click", closeModal2)
    modal2.querySelector(".js-modal-close").addEventListener("click", closeModal2)
    modal2.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
    modal.removeAttribute("aria-modal")
    modal.removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    modal = null
}

const closeModal2 = function (e) {
    if (modal2 === null) return
    e.preventDefault()
    modal2.style.display = "none"
    modal2.setAttribute("aria-hidden", "true")
    modal2.removeAttribute("aria-modal")
    modal2.removeEventListener("click", closeModal2)
    modal2.querySelector(".js-modal-close").removeEventListener("click", closeModal2,
    document.querySelector(".afficherErreur").innerHTML = "",
    document.querySelector(".aSupprimer").style.display = "flex",
    document.querySelector("#imagePreview").style.display = "none")
    modal2.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    modal2 = null
    document.querySelector(".submitForm").setAttribute("disabled", "")
    document.querySelector(".submitForm").style.backgroundColor = "grey"
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
})

document.querySelectorAll(".js-modal2").forEach(a => {
    a.addEventListener("click", openModal2)
    a.addEventListener("click", function() {
        document.querySelector("#modal").style.display = "none"
    })
})


document.querySelectorAll(".retour").forEach(a => {
    a.addEventListener("click", closeModal2)
    a.addEventListener("click", function() {
    document.querySelector("#modal").style.display = null
    document.querySelector(".afficherErreur").innerHTML = ""
    document.querySelector(".aSupprimer").style.display = "flex"
    document.querySelector("#file").value = ""
    document.querySelector("#imagePreview").src = ""
    document.querySelector("#imagePreview").style.display = "none"
    document.querySelector(".submitForm").setAttribute("disabled", "")
    document.querySelector(".submitForm").style.backgroundColor = "grey"
    })
})

//Tests pour activer le bouton "Valider" dans la modale//
document.querySelector(".submitForm").setAttribute("disabled", "")
document.querySelector(".submitForm").style.backgroundColor = "grey"
let file = document.querySelector("#file")
let titre = document.querySelector("#titre")
let categorie = document.querySelector("#categoriesSelect")

file.addEventListener("change", ()=> {
    if (file.value !== "") {
        if (titre.value !== "") {
            if (categorie.value !== "") {
                document.querySelector(".submitForm").removeAttribute("disabled", "")
                document.querySelector(".submitForm").style.backgroundColor = "#1D6154"
            }
        }
    }
})

titre.addEventListener("change", ()=> {
    if (file.value !== "") {
        if (titre.value !== "") {
            if (categorie.value !== "") {
                document.querySelector(".submitForm").removeAttribute("disabled", "")
                document.querySelector(".submitForm").style.backgroundColor = "#1D6154"
            }
        }
    }
})

categorie.addEventListener("change", ()=> {
    if (file.value !== "") {
        if (titre.value !== "") {
            if (categorie.value !== "") {
                document.querySelector(".submitForm").removeAttribute("disabled", "")
                document.querySelector(".submitForm").style.backgroundColor = "#1D6154"
            }
        }
    }
})



//Preview image//
document.querySelector(".iFile").addEventListener("change", function() {
    let image = ""
    image = document.querySelector("#file").files[0];
  
    document.querySelector(".aSupprimer").style.display = "none"
    document.querySelector("#imagePreview").style.display = "block"

    const reader = new FileReader(image);
    reader.onload = function () {
        document.querySelector("#imagePreview").src = ""
        document.querySelector("#imagePreview").src = reader.result
      };
      reader.readAsDataURL(image);
});