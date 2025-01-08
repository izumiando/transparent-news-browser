// SearchServiceNewsAPI.js
import { SearchService } from "./SearchService";

export class SearchServiceNewsAPI extends SearchService {
    constructor (){
        // this might not be the best place to hard code this but we can think about this later
        super("NewsAPI", "aa563547e9744968a5cbe499a122f5ed");
    }

    async searchArticles(query: string): Promise<any> {
        const url: string = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;
        const req: Request = new Request(url);

        try {
            const response: Response = await fetch(req); // Await fetch response
            const data: unknown = await response.json(); // Await JSON parsing, try to create an ApiResult interface to improve type script

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