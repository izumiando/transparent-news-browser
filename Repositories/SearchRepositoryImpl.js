// SearchRepositoryImpl.js

class SearchRepositoryImpl extends SearchRepository {
    constructor(searchServices) {
        // not sure what this is 
        // super();
        this.searchServices = searchServices; // list of SearchService objects
    }

    execute(query) {
        const rawResults = {};
        // Call the SearchService to fetch data from the API
        for(let i = 0; i < this.searchServices.length; i++){
            rawResults[this.searchServices[i].apiName] = await this.searchServices[i].execute(query);
        }
        return rawResults;
    }
}

export default SearchRepositoryImpl;