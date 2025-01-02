import { SearchController } from './Controllers/SearchController.js'
import { PerformSearchUseCase } from './UseCases/PerformSearchUseCase.js'
import { SearchViewModel } from './ViewModels/SearchViewModel.js'
import { SearchRepository } from './Repositories/SearchRepository.js'
import { SearchRepositoryImpl } from './Repositories/SearchRepositoryImpl.js'
import { SearchService } from './ExternalAPIs/SearchService.js'
import { SearchServiceNewsAPI } from './ExternalAPIs/SearchServiceNewsAPI.js'
import { Article } from './Entities/Article.js'
// everything up to here is for the Search
import { TranslateController } from './Controllers/TranslateController.js'
import { TranslateUseCase } from './UseCases/TranslateUseCase.js'
import { TranslateViewModel } from './ViewModels/TranslateViewModel.js'
import { TranslateRepository } from './Repositories/TranslateRepository.js'
import { TranslateRepositoryImpl } from './Repositories/TranslateRepositoryImpl.js'
import { TranslateService } from './ExternalAPIs/TranslateService.js'
import { TranslateServiceDeepL } from './ExternalAPIs/TranslateServiceDeepL.js'
import { Scraper } from './Drivers/Scraper.js'
// everything up to here is for the Translation (html)


async function main(){
    // this section is for searching articles
    const searchServices = [];
    searchServices.push(new SearchServiceNewsAPI());
    const searchRepository = new SearchRepositoryImpl(searchServices);
    const performSearchUseCase = new PerformSearchUseCase(searchRepository);
    const searchViewModel = new SearchViewModel();
    const searchController = new SearchController(performSearchUseCase, searchViewModel);

    const test = await searchController.execute("bitcoin");
    console.log("");
    console.log("============look at the results below============");
    console.log("first 3 formatted results titles returned from main()");
    console.log("");
    console.log(test[0].title);
    console.log(test[1].title);
    console.log(test[2].title);

    // this section is for translating an article
    const translateServices = {};
    translateServices["DeepL"] = new TranslateServiceDeepL();
    const scraper = new Scraper();
    const translateRepository = new TranslateRepositoryImpl(translateServices);
    const translateUseCase = new TranslateUseCase(scraper, translateRepository);
    const translateViewModel = new TranslateViewModel();
    const translateController = new TranslateController(translateUseCase, translateViewModel);

    const translatedArticle = translateController.execute(test[1], "EN-US", "DeepL");
    console.log(translatedArticle.translated_html);
    return test;
}
// test new change
//main().then(result => console.log(result));
main();