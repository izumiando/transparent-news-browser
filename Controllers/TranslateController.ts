// writing out the logic before it slips my mind
// TranslateController - TranslateUseCase, TranslateViewModel, (Article - this guy gets passed down)
// TranslateUseCase - ScrapeRepository, TranslateRepository, (Article)
// ScrapeRespository(Impl) : scrape the html with BeautifulSoup using the url
// TranslateRepository(Impl) - TranslateService
// TranslateService : make one per translator, translates html

import { TranslateUseCase } from '../UseCases/TranslateUseCase'
import { TranslateViewModel } from '../ViewModels/TranslateViewModel'
import { Article } from '../Entities/Article'

export class TranslateController {
    translateUseCase: TranslateUseCase;
    translateViewModel: TranslateViewModel;

    constructor(translateUseCase: TranslateUseCase, translateViewModel: TranslateViewModel){
        this.translateUseCase = translateUseCase;
        this.translateViewModel = translateViewModel;
    }

    async execute(article: Article, language: string, translator: string): Promise<Article>{
        // question, should this be returning an Article object or just the two HTMLs?
        const articleTranslated: Article = await this.translateUseCase.execute(article, language, translator);
        return this.translateViewModel.execute(articleTranslated);
    }
}