// Interface
export class SearchService {
    apiName: string;
    apiKey: string;

    constructor(apiName: string, apiKey: string){
        this.apiName = apiName;
        this.apiKey = apiKey;
    }

    searchArticles(query: string) {
        throw new Error("searchArticles method must be implemented");
    }
}