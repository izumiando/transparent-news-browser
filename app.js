import { SearchController } from './Controllers/SearchController.js'
import { PerformSearchUseCase } from './UseCases/PerformSearchUseCase.js'
import { SearchViewModel } from './ViewModels/SearchViewModel.js'
import { SearchRepository } from './Repositories/SearchRepository.js'
import { SearchRepositoryImpl } from './Repositories/SearchRepositoryImpl.js'
import { SearchService } from './ExternalAPIs/SearchService.js'
import { SearchServiceNewsAPI } from './ExternalAPIs/SearchServiceNewsAPI.js'
import { Article } from './Entities/Article.js'


async function main(){
    const searchServices = [];
    searchServices.push(new SearchServiceNewsAPI());
    const searchRepository = new SearchRepositoryImpl(searchServices);
    const performSearchUseCase = new PerformSearchUseCase(searchRepository);
    const searchViewModel = new SearchViewModel();
    const searchController = new SearchController(performSearchUseCase, searchViewModel);

    const test = await searchController.execute("Japan");
    console.log("first 3 formatted results titles returned from main()");
    console.log(test[0].title);
    console.log(test[1].title);
    console.log(test[2].title);
    return test;
}

//main().then(result => console.log(result));
main();