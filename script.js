// =========================
// LISTE DES RÉPONSES
// =========================

const reponses = [

  // POSITIVES
  { texte: "Oui.", type: "positive" },
  { texte: "Vas-y, fonce !", type: "positive" },
  { texte: "Fais-toi confiance.", type: "positive" },
  { texte: "Ça vaut le coup d'essayer.", type: "positive" },
  { texte: "Tu peux le faire.", type: "positive" },
  { texte: "Oui, clairement.", type: "positive" },
  { texte: "C'est le bon moment.", type: "positive" },
  { texte: "Tente ta chance.", type: "positive" },
  { texte: "Tu as plus à gagner qu'à perdre.", type: "positive" },
  { texte: "Écoute ton intuition.", type: "positive" },

  // NÉGATIVES
  { texte: "Non.", type: "negative" },
  { texte: "Mauvaise idée.", type: "negative" },
  { texte: "Pas aujourd'hui.", type: "negative" },
  { texte: "Tu risques de le regretter.", type: "negative" },
  { texte: "Oublie cette idée.", type: "negative" },
  { texte: "Ce n'est pas le bon moment.", type: "negative" },
  { texte: "Je ne le ferais pas.", type: "negative" },
  { texte: "Mieux vaut éviter.", type: "negative" },
  { texte: "Tu connais déjà la réponse : non.", type: "negative" },
  { texte: "N'insiste pas.", type: "negative" },

  // RÉFLEXION
  { texte: "Réfléchis-y encore.", type: "reflexion" },
  { texte: "As-tu pensé aux conséquences ?", type: "reflexion" },
  { texte: "Tu as déjà choisi, je crois.", type: "reflexion" },
  { texte: "Pourquoi hésites-tu ?", type: "reflexion" },
  { texte: "Pose-toi la vraie question.", type: "reflexion" },
  { texte: "Et si tu attendais un peu ?", type: "reflexion" },
  { texte: "Trop tôt pour le savoir. Reviens dans 10 jours.", type: "reflexion" },
{ texte: "J’ai bien une réponse, mais elle ne va pas te plaire.", type: "reflexion" },
  { texte: "Tu cherches une réponse ou une permission ?", type: "reflexion" },
  { texte: "Que conseillerais-tu à quelqu'un d'autre ?", type: "reflexion" },
  { texte: "Ton intuition essaie de te dire quelque chose.", type: "reflexion" },
  { texte: "Tu connais peut-être déjà la réponse.", type: "reflexion" },


  // HUMOUR
{ texte: "Alors là, remets-toi en question.", type: "humour" },
{ texte: "Cette pression serait mieux dans un verre.", type: "humour" },
{ texte: "Il te reste le joker : « Appel à un ami ».", type: "humour" },
{ texte: "No way.", type: "humour" },
{ texte: "T’as plus de chances au loto.", type: "humour" },
{ texte: "Trop tôt pour le savoir. Reviens dans 10 jours.", type: "humour" },
{ texte: "ChatGPT dirait : « Tu es au bon endroit, crois en toi, tu es un cadeau de l’univers. »", type: "humour" },
{ texte: "T’es sérieux ? Ça fait 10 fois que tu me la poses.", type: "humour" },
{ texte: "Erreur 404 : fous-moi la paix.", type: "humour" },
{ texte: "Va sur Doctolib prendre rendez-vous avec un spécialiste.", type: "humour" },
{ texte: "Pas vu, pas pris.", type: "humour" },
{ texte: "Ça sent le sapin.", type: "humour" },
{ texte: "Tu crois au Père Noël ?", type: "humour" },
{ texte: "Mets-toi en mode « avion », je ne peux plus rien pour toi.", type: "humour" },
{ texte: "Et la marmotte met le chocolat dans le papier d’aluminium.", type: "humour" },
{ texte: "Achète « La survie pour les nuls ».", type: "humour" },
{ texte: "J’ai bien une réponse, mais elle ne va pas te plaire.", type: "humour" },
{ texte: "Maître Yoda dirait : « Une réponse ? En toi tu la trouveras. »", type: "humour" },

  // PROMÉTHÉE / HUMOUR
  { texte: "Je décline toute responsabilité.", type: "reflexion" },
  { texte: "Techniquement oui... raisonnablement, peut-être pas.", type: "reflexion" },
  { texte: "Ton cerveau dit non. Ton sourire dit oui.", type: "reflexion" },
  { texte: "Si tu poses la question, c'est déjà suspect.", type: "reflexion" },
  { texte: "Fais-le... mais ne dis pas que c'est moi.", type: "positive" },
  { texte: "Ça sent l'idée brillante... ou la catastrophe.", type: "reflexion" },
  { texte: "Je sens que tu vas le faire quand même.", type: "positive" },
  { texte: "Tu veux vraiment que je décide à ta place ?", type: "reflexion" }
];


// =========================
// RÉCUPÉRATION DES ÉLÉMENTS
// =========================

const boutonQuestion = document.getElementById("boutonQuestion");
const boutonRejouer = document.getElementById("boutonRejouer");
const reponse = document.getElementById("reponse");
const instruction = document.getElementById("instruction");


// =========================
// FONCTION PRINCIPALE
// =========================

function donnerReponse() {

  // Empêche de recliquer pendant l'animation
  boutonQuestion.disabled = true;

  // Cache l'ancienne réponse
  reponse.classList.remove(
    "visible",
    "positive",
    "negative",
    "reflexion"
  );

  reponse.textContent = "";

  // Change le petit texte
  instruction.textContent = "Prométhée réfléchit...";

  // Animation du point d'interrogation
  boutonQuestion.classList.add("tourne");


  // Petit suspense avant la réponse
  setTimeout(function() {

    // Arrête la rotation
    boutonQuestion.classList.remove("tourne");

    // Choisit une réponse au hasard
    const indexAleatoire = Math.floor(
      Math.random() * reponses.length
    );

    const choix = reponses[indexAleatoire];

    // Affiche le texte
    reponse.textContent = choix.texte;

    // Ajoute la couleur correspondant au type
    reponse.classList.add(choix.type);

    // Petite attente pour lancer l'animation d'apparition
    setTimeout(function() {
      reponse.classList.add("visible");
    }, 50);

    // Change la consigne
    instruction.textContent = "Prométhée a parlé.";

    // Réactive le bouton
    boutonQuestion.disabled = false;

  }, 1500);
}


// =========================
// NOUVELLE QUESTION
// =========================

function nouvelleQuestion() {

  // Cache la réponse
  reponse.classList.remove(
    "visible",
    "positive",
    "negative",
    "reflexion"
  );

  reponse.textContent = "";

  // Remet la consigne de départ
  instruction.textContent =
    "Appuie sur le ? pour découvrir ta réponse.";

  // Remet le bouton disponible
  boutonQuestion.disabled = false;
}


// =========================
// CLIC SUR LE ?
// =========================

boutonQuestion.addEventListener(
  "click",
  donnerReponse
);


// =========================
// CLIC SUR NOUVELLE QUESTION
// =========================

boutonRejouer.addEventListener(
  "click",
  nouvelleQuestion
);
