const baseUrl = "http://localhost:5678/api/"

async function getWorks() {
    const reponse = await fetch(baseUrl + "works/");
    const works = await reponse.json();
    return works
}

async function getCategories() {
    const reponse = await fetch(baseUrl + "categories/");
    const categories = await reponse.json();
    return categories
}