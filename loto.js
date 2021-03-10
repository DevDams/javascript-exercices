/*
 * ----
 * LE JEU DU LOTO
 * ----
 */

let choix
let argent
let tri = []
let perte = ''
let gain = 0
let resultat = []

let entree = prompt("Entrer votre chiffre n°1")
// === Verifie si le premier caractère des entrée est un chiffre ou une lettre
if (isNaN(parseInt(entree[0]))) {
    alert('Vous n\'etes pas autorisé à entrer des lettres !!!!')
} else {
    choix = entree.split(' ')
    console.log(`Les nombres que vous avez choisi sont ${choix}`)
    argent = parseInt(prompt("Combien voulez-vous miser ?"))
    // === Verifie si la somme est supérieur à 200
    if (isNaN(argent)) {
        alert('Entrer la somme en chiffre !!!!')
    } else if (argent < 200) {
        alert('Vous ne pouvez miser une somme inférieur à 200')
    }
}

for (let i = 0; i <= 5; i++) {
    // Transforme en chaine de caractère le nombre généré,
    // tout en prenant la partie entière
    let tri_1 = (Math.floor(Math.random()*5)).toString()
    tri.push(tri_1)
}
console.log(`\nLes resultats du tirage affiche les nombre suivant ${tri}\n\nPatientez pour les résultats finaux`)

choix.forEach(items => {
    if (tri.includes(items)) {
        resultat.push(items)
        if (resultat.length < 2) {
            gain = argent
        } else if (resultat.length === 2) {
            gain = argent + argent*2
        } else if (resultat.length > 2) {
            gain = argent + argent*4
        } else {
            gain = 0
        }
    }
});


let time = parseInt(localStorage.getItem('time')) || 60
let timer = setInterval(()=>{
    time--
    localStorage.setItem('time' , time)
    localStorage.setItem("gain joueur 1", gain);

    if(time === 0 ){
        clearInterval(timer)
        localStorage.removeItem('time')
        let joueur_1 = localStorage.getItem("Joueur 1");
        console.log(joueur_1)

        alert('<===>Terminer<===>')
    }
},1000)
