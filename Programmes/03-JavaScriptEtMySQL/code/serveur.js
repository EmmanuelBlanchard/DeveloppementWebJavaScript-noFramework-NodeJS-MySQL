var http = require("http");
var url = require("url");
var fs = require("fs");
require("remedial");
var querystring = require("querystring");
var gestionPage = require("./js_serveur/gestionPage.js");

var mysql = require('mysql');
var bd = require("./js_serveur/bd.js");

var gererServeur = function(requete,reponse) {
    var monUrl = url.parse(requete.url);
    var urlQueryString = querystring.parse(monUrl.query);
    var extension = monUrl.pathname.substring(monUrl.pathname.indexOf("."),monUrl.pathname.length);
    gestionPage.initialisation(monUrl, extension, requete,reponse,urlQueryString);
    
    if(gestionPage.url.pathname !== "/favicon.ico") {
        gestionPage.envoyerDataToUser();
    }

    bd.connexion();
    bd.instance.query('SELECT * FROM question', function (error, results, fields) {
        if (error) throw error;
        console.log('Les questions sont : ', results);
    });
    bd.deconnexion();       
}

var serveur = http.createServer(gererServeur);
serveur.listen(8080);