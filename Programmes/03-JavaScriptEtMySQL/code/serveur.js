var http = require("http");
var url = require("url");
var fs = require("fs");
require("remedial");
var querystring = require("querystring");
var gestionPage = require("./js_serveur/gestionPage.js");

var gererServeur = function(requete,reponse) {
    var monUrl = url.parse(requete.url);
    var urlQueryString = querystring.parse(monUrl.query);
    var extension = monUrl.pathname.substring(monUrl.pathname.indexOf("."),monUrl.pathname.length);
    gestionPage.initialisation(monUrl, extension, requete,reponse,urlQueryString);
    
    if(gestionPage.url.pathname !== "/favicon.ico") {
        gestionPage.envoyerDataToUser();
    }  
}

var serveur = http.createServer(gererServeur);
serveur.listen(8080);