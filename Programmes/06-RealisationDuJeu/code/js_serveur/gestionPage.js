var fs = require("fs");

var gestionPage = {
    url : null,
    extension : null,
    requete : null,
    reponse : null,
    queryString : null,
    objetToSupplant : null,

    initialisation : function(url,extension,requete,reponse,queryString) {
        this.url = url;
        this.extension = extension;
        this.requete = requete;
        this.reponse = reponse;
        this.queryString = queryString;
        this.objetToSupplant = {};
    },

    envoyerDataToUser : function() {
        var data = this.genererDataAEnvoyer();
        this.reponse.writeHead(200,{'Content-Type' : data.contentType});
        this.reponse.write(data.content);
        this.reponse.end();
    },

    genererDataAEnvoyer : function() {
        var data = {};
        var dossier = "";

        if(this.extension === ".html" || this.url.pathname==="/") {
            if(this.url.pathname==="/"){
                this.url.pathname = "/index.html";
            }
            dossier = "html";
            data.contentType = "text/html";
            data.content = this.genererPageHtml(dossier);
        } else if(this.extension === ".css") {
            dossier = "css";
            data.contentType = "text/css";
            data.content = fs.readFileSync(dossier+this.url.pathname);
        } else if(this.extension === ".js") {
            dossier = "js_client";
            data.contentType = "application/javascript";
            data.content = fs.readFileSync(dossier+this.url.pathname);
        } else if(this.extension === ".png") {
            dossier = "ressources/images";
            data.contentType = "image/png";
            data.content = fs.readFileSync(dossier+this.url.pathname);
        } else if(this.extension === ".jpg") {
            dossier = "ressources/images";
            data.contentType = "image/jpeg";
            data.content = fs.readFileSync(dossier+this.url.pathname);
        }
        return data;
    },

    genererPageHtml : function(dossier) {
        var pageHTML = "";
        var headerHTML = fs.readFileSync(dossier+"/common/header.html","UTF-8");
        var footerHTML = fs.readFileSync(dossier+"/common/footer.html","UTF-8");
        var page = fs.readFileSync(dossier+this.url.pathname,"UTF-8");
        pageHTML = headerHTML + page + footerHTML;
        try {
            pageHTML = pageHTML.supplant(this.objetToSupplant);
        } catch(e) {

        }
        return pageHTML;
    }
}
module.exports = gestionPage;