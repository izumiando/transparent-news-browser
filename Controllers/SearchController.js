// Dependencies : PerformSearchUseCase, SearchViewModel
import { PerformSearchUseCase } from '../UseCases/PerformSearchUseCase.js'
import { SearchViewModel } from '../ViewModels/SearchViewModel.js'

export class SearchController {
    constructor(performSearchUseCase, searchViewModel){
        this.performSearchUseCase = performSearchUseCase;
        this.searchViewModel = searchViewModel;
    }

    execute(query){
        // Receives search input from the UI, calls PerformSearchUseCase, and returns formatted search results to view.
        // not sure if this is the correct syntax
        const searchResult = this.performSearchUseCase.execute(query);
        this.searchViewModel.execute(searchResult);
    }
}