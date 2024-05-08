const suppWorks = async function (e) {
    e.preventDefault()
    let id = await getWorks(3)
    console.log(id)
    const target = document.querySelector(e.target.getAttribute("href"))
    console.log(target)
    
}

const suppr = document.querySelectorAll(".suppr");

for (let i = 0; i < suppr.length; i++) {
    document.querySelector(".suppr").addEventListener("click", function(){
        e.preventDefault()
        console.log("Test")
    })
}