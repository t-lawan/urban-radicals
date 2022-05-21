export class SiteModel {
    id;
    title;
    jumbotronText;
    seo;

    constructor(id, title, jumbotronText, seo){
        this.id = id;
        this.title = title;
        this.jumbotronText = jumbotronText;
        this.seo = seo;
    }
}