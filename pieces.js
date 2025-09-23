// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

 }
 
// Ajout des fonctionnalités de tri et de filtre
const btnTrier = document.querySelector(".btn-trier");
btnTrier.addEventListener("click", () => {
   pieces.sort((a, b) => a.prix - b.prix);
   console.log(pieces)
   const nomDesPieces = pieces.map(piece => piece.nom);
   console.log(nomDesPieces);
})
const btnFiltrer = document.querySelector(".btn-filtrer");
btnFiltrer.addEventListener("click", () => {
   let prixAbordables = pieces.filter(piece => piece.prix > 35);
   console.log(prixAbordables)
})
const btn_trierd = document.querySelector(".btn_trierd");
btn_trierd.addEventListener("click", () => {
   pieces.sort((a, b) => b.prix - a.prix);
   console.log(pieces)
})
const btn_sansdescription = document.querySelector(".btn_sansdescription");
btn_sansdescription.addEventListener("click", () => {
   let piecesSansDescription  = pieces.filter(piece => piece.description == undefined);
   console.log(piecesSansDescription)
})

// Affichage des pièces abordables dans une liste
let piecesAbordables = document.querySelector(".abordables");
let trieDepiecesAbordables = pieces.filter(piece => piece.prix < 35);

let ul = document.createElement("ul")
piecesAbordables.appendChild(ul)

for (let i = 0; i < trieDepiecesAbordables.length; i++) {
   let li = document.createElement("li")
   li.innerText = trieDepiecesAbordables.map(piece => piece.nom)[i]
   ul.appendChild(li)
}

