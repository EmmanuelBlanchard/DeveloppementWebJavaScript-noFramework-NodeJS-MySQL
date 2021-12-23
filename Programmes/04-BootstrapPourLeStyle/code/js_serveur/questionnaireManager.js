var mysql = require('mysql');
var bd = require("./bd.js");

var gestionPage = require("./gestionPage.js");

var questionnaireManager = {

    afficherQuestions : function() {
        bd.connexion();
        bd.instance.query('SELECT * from question', function (error, results, fields) {
            if (error) throw error;
            console.log('Les questions sont : ', results);
            var txt ="";
            for(var question of results) {
                txt +="<tr>";
                    txt +='<th scope="row">'+question['idquestion']+'</th>';
                    txt +='<td>'+question['descriptionQuestion']+'</td>';
                    txt +='<td>'+question['reponseAQuestion']+'</td>';
                    txt +='<td>'+question['reponseBQuestion']+'</td>';
                    txt +='<td>'+question['reponseCQuestion']+'</td>';
                    txt +='<td>'+question['reponseDQuestion']+'</td>';
                    txt +='<td>'+question['bonneReponseQuestion']+'</td>';
                txt +='</tr>';
            }
            gestionPage.objetToSupplant.Questions = txt;
            gestionPage.envoyerDataToUser();
        });
        bd.deconnexion();
    }
}
module.exports = questionnaireManager;