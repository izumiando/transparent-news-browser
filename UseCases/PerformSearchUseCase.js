// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)

class PerformSearchUseCase {
    constructor(searchRepository, searchResult){
        this.searchRepository = searchRepository; // searchRepository should be an SearchRepositoryImpl object
        this.searchResult = searchResult;
    }

    // Validate input, calls the SearchRepository, and return results as SearchResult object
    execute(query){
        // as a next step, translate query before running the search
        rawData = this.searchRepository.execute(query);
        // format rawData into searchResult and add to this.searcResult
        return this.searchResult;
    }
}

export default PerformSearchUseCase;