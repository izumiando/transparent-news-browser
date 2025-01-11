import { TranslateService } from '../ExternalAPIs/TranslateService.js'
import { TranslateRepository } from './TranslateRepository.js';

export class TranslateRepositoryImpl extends TranslateRepository {
    constructor(translateServices) { 
        super();
        this.translateServices = translateServices; // dictionary of TranslateService objects
    }

    async translate(html, language, translator) {
        // validate translator input
        const translatedHTML = this.translateServices[translator].translateHTML(html, language);
        return translatedHTML;
    }
    
}