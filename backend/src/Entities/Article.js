// testing coding by writing up Article Entity

export class Article {
    constructor(title, author, date, ns, url, description, html, api){
        this.title = title;
        this.author = author;
        this.date = date;
        this.ns = ns;
        this.url = url;
        this.description = description;
        this.html = html;
        this.translated_html = null;
        this.sourceAPI = api;
    }
}