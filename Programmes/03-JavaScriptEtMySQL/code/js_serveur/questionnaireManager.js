var mysql = require('mysql');
var bd = require("./bd.js");

var gestionPage = require("./gestionPage.js");

var questionnaireManager = {

    afficherQuestions : function() {
        bd.connexion();
        bd.instance.query('SELECT * FROM question', function (error, results, fields) {
            if (error) throw error;
            console.log('Les questions sont : ', results);
        });
        bd.deconnexion();
        gestionPage.envoyerDataToUser();
    }
   
}
module.exports = questionnaireManager;