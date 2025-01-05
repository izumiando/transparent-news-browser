// testing coding by writing up Article Entity

export class Article {
    title: string | null;
    author: string | null; // change this to Author object later
    date: string | null; // maybe change this to a date object if that is a thing
    ns: string | null;
    url: string | null;
    description: string | null;
    html: string | null;
    translated_html: string | null;
    sourceAPI: string | null;

    // this constructor takes in a dictionary type object and sets whatever is not inserted to null
    // this new constructor allows flexibility for different APIs that will provide different information
    constructor({
        title = null,
        author = null,
        date = null,
        ns = null,
        url = null,
        description = null,
        html = null,
        translated_html = null,
        sourceAPI = null,
      }: {
        title?: string | null;
        author?: string | null;
        date?: string | null;
        ns?: string | null;
        url?: string | null;
        description?: string | null;
        html?: string | null;
        translated_html?: string | null;
        sourceAPI?: string | null;
      }) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.ns = ns;
        this.url = url;
        this.description = description;
        this.html = html;
        this.translated_html = translated_html;
        this.sourceAPI = sourceAPI;
      }
}