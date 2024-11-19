// SearchServiceNewsAPI.js
import { SearchService } from "./SearchService.js";

export class SearchServiceNewsAPI extends SearchService {
    constructor (){
        super("NewsAPI", "aa563547e9744968a5cbe499a122f5ed");
    }

    async searchArticles(query) {
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;
        const req = new Request(url);

        try {
            const response = await fetch(req); // Await fetch response
            const data = await response.json(); // Await JSON parsing

            if (data.articles) {
                console.log("head in SearchServiceNewsAPI");
                console.log(data.articles[1]);
                console.log("tail");
                return data.articles;
            } else {
                throw new Error("No articles found in response");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            throw error;
        }
    }
}