// Dependencies : PerformSearchUseCase, SearchViewModel
import { PerformSearchUseCase } from '../UseCases/PerformSearchUseCase.ts'
import { SearchViewModel } from '../ViewModels/SearchViewModel.ts'
import { Article } from '../Entities/Article.ts' 

export class SearchController {
    performSearchUseCase: PerformSearchUseCase;
    searchViewModel: SearchViewModel;


    constructor(performSearchUseCase: PerformSearchUseCase, searchViewModel: SearchViewModel){
        this.performSearchUseCase = performSearchUseCase;
        this.searchViewModel = searchViewModel;
    }

    async execute(query: string): Promise<any>{ // may have to change "any" to something more specific
        // Receives search input from the UI, calls PerformSearchUseCase, and returns formatted search results to view.
        // not sure if this is the correct syntax
        const searchResult: Article[] = await this.performSearchUseCase.execute(query);
        //console.log("in controller");
        //console.log(searchResult[0]);
        return this.searchViewModel.execute(searchResult);
    }
}