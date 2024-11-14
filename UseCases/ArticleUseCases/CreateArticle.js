// CreateArticle Use Case

class CreateArticle {
    constructor(){
        // nothing to create automatically
    }

    execute(title, author, data, ns, url, description, html){
        let article = new Article(title, author, data, ns, url, description, html);
        return article;
    }
}