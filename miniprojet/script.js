function afficherHeure() {
    const horloge = document.getElementById("horloge");

    if(horloge !== null){
        const maintenant = new Date();

        const date = maintenant.toLocaleDateString();

        const heure = maintenant.toLocaleTimeString();

        horloge.innerText = date + " - " + heure;
    }
}

if(document.getElementById("horloge") !== null){
    setInterval(afficherHeure, 1000);
    afficherHeure();
}

let dark = false;
function darkmode(){
    if(dark===true){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("theme").innerText = "sombre";
        dark = false;
    }
    else if(dark === false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("theme").innerText = "claire";
        dark = true;
    }
}

if(document.body.className === "index"){
    alert("Bienvenue dans ma page web");
}
function afficherMasquer(){
    const contenu = document.getElementById("contenu");
    const bouton = document.getElementById("btn-contenu");

    if(contenu.style.display === "none"){
        contenu.style.display = "block";
        bouton.innerText = "Masquer le contenu";
    }
    else{
        contenu.style.display = "none";
        bouton.innerText = "Afficher le contenu";
    }
}
function afficherDescription(){
    const suite = document.getElementById("suite-description");
    const bouton = document.getElementById("btn-description");

    if(suite.style.display === "none"){
        suite.style.display = "inline";
        bouton.innerText = "Afficher moins";
    }
    else{
        suite.style.display = "none";
        bouton.innerText = "Afficher plus";
    }
}

function changerCouleurTexte(){
    const description = document.getElementById("description");

    if(description.style.color === "red"){
        description.style.color = "black";
    }
    else{
        description.style.color = "red";
    }
}

function survolCompetences(){
    const competences = document.getElementById("competences");

    competences.style.backgroundColor = "lightblue";
    competences.style.color = "blue";
}

function quitterSurvol(){
    const competences = document.getElementById("competences");

    competences.style.backgroundColor = "white";
    competences.style.color = "black";
}


