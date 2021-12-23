var mysql = require('mysql');
var bd = require("./bd.js");

var gestionPage = require("./gestionPage.js");

var questionnaireManager = {

    afficherQuestions : function() {
        bd.connexion();
        var req = "SELECT idquestion, nomQuestionnaire, descriptionQuestion, reponseAQuestion, reponseBQuestion, reponseCQuestion, reponseDQuestion, bonneReponseQuestion FROM question INNER JOIN questionnaire ON question.idquestionnaire = questionnaire.idquestionnaire";
        bd.instance.query(req, function (error, results, fields) {
            if (error) throw error;
            var txt ="";
            for(var question of results){
                txt +="<tr>";
                    txt +='<th scope="row">'+question['idquestion']+'</th>';
                    txt +='<td>'+question['nomQuestionnaire']+'</td>';
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
    },

    afficherQuestionnaire : function() {
        bd.connexion();
        var req = "SELECT * FROM questionnaire";
        bd.instance.query(req, function (error, results, fields) {
            if (error) throw error;
            var txt ="";
            for(var questionnaire of results) {
                txt +="<tr>";
                    txt +='<th scope="row">'+questionnaire['idquestionnaire']+'</th>';
                    txt +='<td>'+questionnaire['nomQuestionnaire']+'</td>';
                    txt +='<td>'+questionnaire['descriptionQuestionnaire']+'</td>';
                txt +='</tr>';
            }
            gestionPage.objetToSupplant.Questionnaires = txt;
            gestionPage.envoyerDataToUser();
        });
        bd.deconnexion();
    },

    gererCreationQuestions : function() {
        bd.connexion();
        var req = "SELECT * FROM questionnaire";
        bd.instance.query(req, function (error, results, fields) {
            if(error) throw error;
            var optionTxt = "<option></option>";
            for(var ligne of results) {
                optionTxt += "<option value='" + ligne.idquestionnaire + "'>";
                optionTxt += ligne.nomQuestionnaire + " : " + ligne.descriptionQuestionnaire;
                optionTxt += "</option>";
            }
            var validation = "";
            if(gestionPage.queryString.confirm === "yes") {
                validation += '<div class="alert alert-success" role="alert">';
                validation += 'La question a bien été créée en BD';
                validation += '</div>';
            }
            gestionPage.objetToSupplant.validationSaisie = validation;
            gestionPage.objetToSupplant.optionQuestionnaires = optionTxt;
            gestionPage.envoyerDataToUser();
        });
        bd.deconnexion();
    },

    gererCreationQuestionnaire : function() {
        var validation = "";
        if(gestionPage.queryString.confirm === "yes") {
            validation += '<div class="alert alert-success" role="alert">';
            validation += 'La question a bien été créée en BD';
            validation += '</div>';
        }
        gestionPage.objetToSupplant.validationSaisie = validation;
        gestionPage.envoyerDataToUser();
    },

    creerQuestionBD : function(info) {
        bd.connexion();
        var req = "INSERT INTO question (descriptionQuestion,reponseAQuestion,reponseBQuestion,reponseCQuestion,reponseDQuestion,bonneReponseQuestion,idquestionnaire) VALUES (?,?,?,?,?,?,?);";
        bd.instance.query(req, [info.question, info.reponseA, info.reponseB, info.reponseC, info.reponseD, info.bonneReponse, parseInt(info.questionnaire)] , function (error, results, fields) {
            if (error) throw error;
            gestionPage.reponse.end("<script>document.location.href='creerQuestion.html?confirm=yes'</script>")
        });
        bd.deconnexion();
    },

    creerQuestionnaireBD : function (info) {
        bd.connexion();
        var req = "INSERT INTO questionnaire (nomQuestionnaire,descriptionQuestionnaire) VALUES (?,?);";
        bd.instance.query(req, [info.questionnaire, info.description] , function (error, results, fields) {
            if (error) throw error;
            gestionPage.reponse.end("<script>document.location.href='creerQuestionnaire.html?confirm=yes'</script>")
        });
        bd.deconnexion();
    }
   
}
module.exports = questionnaireManager;