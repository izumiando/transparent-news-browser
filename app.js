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
    return test;
}

main().then(result => console.log(result));