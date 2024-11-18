// SearchServiceNewsAPI.js
import { SearchService } from "./SearchService.js";

export class SearchServiceNewsAPI extends SearchService {
    constructor (){
        super("NewsAPI", "aa563547e9744968a5cbe499a122f5ed");
    }

    searchArticles(query) {
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;

        var req = new Request(url);

        return fetch(req)
            .then(response => response.json())
            // need to figure out how to use the data\
            .then(data => {
                if (data.articles) {
                    //console.log(data.articles); // it looks like it is actually working
                    return data.articles;
                } else {
                    throw new Error('No articles found in response');
                }
            }) // details of data.articles structure https://newsapi.org/docs/get-started#search
            .catch(error => {console.error('Error fetching news:', error);
                throw error;});
    }
}