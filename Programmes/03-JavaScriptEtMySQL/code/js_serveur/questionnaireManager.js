var mysql = require('mysql');
var bd = require("./bd.js");

var questionnaireManager = {

    afficherQuestions : function() {
        bd.connexion();
        bd.instance.query('SELECT * FROM question', function (error, results, fields) {
            if (error) throw error;
            console.log('Les questions sont : ', results);
        });
        bd.deconnexion();
    }
   
}
module.exports = questionnaireManager;