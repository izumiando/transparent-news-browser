// Depended by TranslateController
// Dependencies : TranslateRepository(i), Scraper
import { TranslateRepository } from '../Repositories/TranslateRepository'
import { Scraper } from '../Drivers/Scraper'
import { Article } from '../Entities/Article'

export class TranslateUseCase {
    scraper: Scraper;
    translateRepository: TranslateRepository;

    constructor(scraper: Scraper, translateRepository: TranslateRepository){
        this.scraper = scraper;
        this.translateRepository = translateRepository; // translateRepository should be an TranslateRepositoryImpl object
    }

    // this should first scrape the html of a website
    // this function mutates the input & does not create a new Article object
    async execute(article: Article, language: string, translator: string): Promise<string>{
        // not sure if manipulating the entities here is okay by clean architecture
        // need to add error handing, what to do when scraper errors
        article.html = await this.scraper.fetchHTML(article.url); // html gets returned as a string object
        // add error handling above
        console.log("this is the original html");
        console.log(article.html);
        article.translated_html = this.translateRepository.translate(article.html, language, translator);
        return article;
    }

}