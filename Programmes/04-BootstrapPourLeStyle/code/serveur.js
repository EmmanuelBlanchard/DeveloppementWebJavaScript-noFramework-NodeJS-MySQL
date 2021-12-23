var http = require("http");
var url = require("url");
var fs = require("fs");
require("remedial");
var querystring = require("querystring");
var gestionPage = require("./js_serveur/gestionPage.js");

var questionnaireManager = require("./js_serveur/questionnaireManager.js");

var gererServeur = function(requete,reponse) {
    var monUrl = url.parse(requete.url);
    var urlQueryString = querystring.parse(monUrl.query);
    var extension = monUrl.pathname.substring(monUrl.pathname.indexOf("."),monUrl.pathname.length);
    gestionPage.initialisation(monUrl, extension, requete,reponse,urlQueryString);
    
    if(gestionPage.url.pathname !== "/favicon.ico") {
        gererFichier();
    }  
}

function gererFichier() {
    if(gestionPage.url.pathname === "/" || gestionPage.extension === ".html") { // gestion d'une page HTML
        if(gestionPage.url.pathname === "/afficherQuestion.html") {
            questionnaireManager.afficherQuestions();
        } else {
            gestionPage.envoyerDataToUser();
        }   
    } else {
        gestionPage.envoyerDataToUser();
    }
}

var serveur = http.createServer(gererServeur);
serveur.listen(8080);