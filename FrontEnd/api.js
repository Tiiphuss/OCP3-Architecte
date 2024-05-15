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

async function DELETE(works, i) {
    await fetch(baseUrl + "works/" + (works[i].id), {
        method: "DELETE",
        headers: {"Authorization": `bearer ${token}`}
      });
}

async function POST() {
    await fetch(baseUrl + "works/", {
        method: "POST",
        headers: {"Authorization": `bearer ${token}`},
        body: formData
    });
}