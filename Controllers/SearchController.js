// Dependencies : PerformSearchUseCase, SearchViewModel
import { PerformSearchUseCase } from '../UseCases/PerformSearchUseCase.js'
import { SearchViewModel } from '../ViewModels/SearchViewModel.js'

export class SearchController {
    constructor(performSearchUseCase, searchViewModel){
        this.performSearchUseCase = performSearchUseCase;
        this.searchViewModel = searchViewModel;
    }

    async execute(query){
        // Receives search input from the UI, calls PerformSearchUseCase, and returns formatted search results to view.
        // not sure if this is the correct syntax
        const searchResult = await this.performSearchUseCase.execute(query);
        //console.log("in controller");
        //console.log(searchResult[0]);
        return this.searchViewModel.execute(searchResult);
    }
}