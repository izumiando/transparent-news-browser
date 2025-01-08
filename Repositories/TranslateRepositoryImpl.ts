import { TranslateService } from '../ExternalAPIs/TranslateService'
import { TranslateRepository } from './TranslateRepository'

export class TranslateRepositoryImpl extends TranslateRepository {
    translateServices: {[key: string]: TranslateService}

    constructor(translateServices: {[key: string]: TranslateService}) { 
        super();
        this.translateServices = translateServices; // dictionary of TranslateService objects
    }

    async translate(html: string | null, language: string, translator: string): Promise<string>{
        // validate translator input
        if (html == null){
            throw new Error("Article missing html");
        } else {
            const translatedHTML: string = await this.translateServices[translator].translateHTML(html, language);
            return translatedHTML;
        }
    }
    
}