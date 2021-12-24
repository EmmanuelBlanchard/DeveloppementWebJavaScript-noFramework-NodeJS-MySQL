function verification(bonneReponse,reponse,idQuestionnaire,questionNumero) {
    console.log("BonneReponse : " + bonneReponse);
    console.log("Reponse : " + reponse);
    console.log("Id Questionnaire : " + idQuestionnaire);
    console.log("Question Numéro : " + questionNumero);

    if(bonneReponse === reponse) {
        document.location.href ="jeu.html?idquestionnaire="+idQuestionnaire+"&idquestion="+(parseInt(questionNumero) + 1);
    } else {
        var panelErreur = document.querySelector(".perso_hidden");
        if(panelErreur) {
            panelErreur.classList.remove("perso_hidden");
        }
    }
}