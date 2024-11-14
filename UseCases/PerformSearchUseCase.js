// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)

class PerformSearchUseCase {
    constructor(searchRepository, searchResult){
        this.searchRepository = searchRepository; // searchRepository should be a SearchRepositoryImpl object
        this.searchResult = searchResult;
    }

    execute(query){
        // Validate input, calls the SearchRepository, and return results as SearchResult object
        // do something to validate the input
        rawData = this.searchRepository.execute(query);
        // format rawData
        return this.searchResult;
    }
}