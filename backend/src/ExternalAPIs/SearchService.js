// Interface
export class SearchService {
    constructor(apiName, apiKey){
        this.apiName = apiName;
        this.apiKey = apiKey;
    }

    searchArticles(query) {
        throw new Error("searchArticles method must be implemented");
    }
}