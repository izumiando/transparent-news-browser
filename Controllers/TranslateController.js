// writing out the logic before it slips my mind
// TranslateController - TranslateUseCase, TranslateViewModel, (Article - this guy gets passed down)
// TranslateUseCase - ScrapeRepository, TranslateRepository, (Article)
// ScrapeRespository(Impl) : scrape the html with BeautifulSoup using the url
// TranslateRepository(Impl) - TranslateService
// TranslateService : make one per translator, translates html

import { TranslateUseCase } from '../UseCases/TranslateUseCase.js'
import { TranslateViewModel } from '../ViewModels/TranslateViewModel.js'

export class TranslateController {
    constructor(translateUseCase, translateViewModel){
        this.translateUseCase = translateUseCase;
        this.translateViewModel = translateViewModel;
    }

    async execute(article, language, translator){
        // question, should this be returning an Article object or just the two HTMLs?
        const articleTranslated = await this.translateUseCase.execute(article, langauge, translator);
        return this.translateViewModel.execute(articleTranslated);
    }
}