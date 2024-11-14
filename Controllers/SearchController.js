// Dependencies : PerformSearchUseCase, SearchViewModel

class SearchController {
    constructor(performSearchUseCase, searchViewModel){
        this.performSearchUseCase = performSearchUseCase;
        this.searchViewModel = searchViewModel;
    }

    execute(query){
        // Receives search input from the UI, calls PerformSearchUseCase, and returns formatted search results to view.
        // not sure if this is the correct syntax
        searchResult = this.performSearchUseCase.execute(query);
        this.searchViewModel.execute(searchResult);
    }
}