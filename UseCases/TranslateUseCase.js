// Depended by TranslateController
// Dependencies : TranslateRepository(i), Scraper
import { TranslateRepository } from '../Repositories/TranslateRepository.js'
import { Scraper } from '../Drivers/Scraper.js'
import { Article } from '../Entities/Article.js'

export class TranslateUseCase {
    constructor(scraper, translateRepository){
        this.scraper = scraper;
        this.translateRepository = translateRepository; // translateRepository should be an TranslateRepositoryImpl object
    }

    // this should first scrape the html of a website
    // this function mutates the input & does not create a new Article object
    async execute(article, language, translator){
        // not sure if manipulating the entities here is okay by clean architecture
        // need to add error handing, what to do when scraper errors
        article.html = await this.scraper.fetchHTML(article.url); // html gets returned as a string object
        console.log("this is the original html");
        console.log(article.html);
        article.translated_html = this.translateRepository.translate(article.html, language, translator);
        return article;
    }

}