// NewsSource entitiy
// country, owner, known political stance / affiliations, coverage, readership, website / social media, Author s

class Article {
    constructor(title, author, data, ns, url, description, html){
        this.title = title;
        this.author = author;
        this.date = date;
        this.ns = ns;
        this.url = url;
        this.description = description;
        this.html = html;
        this.translated_html = null
    }
}