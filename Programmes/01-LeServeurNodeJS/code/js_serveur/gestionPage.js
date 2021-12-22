var gestionPage = {
    url : null,
    extension : null,
    requete : null,
    reponse : null,
    queryString : null,

    initialisation : function(url,extension,requete,reponse,queryString) {
        this.url = url;
        this.extension = extension;
        this.requete = requete;
        this.reponse = reponse;
        this.queryString = queryString;
    }
}
module.exports = gestionPage;