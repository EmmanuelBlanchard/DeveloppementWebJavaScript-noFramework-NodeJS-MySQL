var mysql = require('mysql');
var bd = require("./bd.js");

var gestionPage = require("./gestionPage.js");

var questionnaireManager = {

    afficherQuestions : function() {
        bd.connexion();
        bd.instance.query('SELECT * FROM question', function (error, results, fields) {
            if (error) throw error;
            console.log('Les questions sont : ', results);
            var txt = "";
            for(var question of results) {
                txt+= question['idquestion']+ " : " + question['descriptionQuestion']+"<br/>";
            }
            gestionPage.objetToSupplant.Questions = txt;
            gestionPage.envoyerDataToUser();
        });
        bd.deconnexion();
    }
}
module.exports = questionnaireManager;