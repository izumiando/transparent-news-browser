// Interface
class SearchService {
    constructor(apiName){
        this.apiName = apiName;
    }

    execute(query) {
        throw new Error("search method must be implemented");
    }
}

export default SearchService;