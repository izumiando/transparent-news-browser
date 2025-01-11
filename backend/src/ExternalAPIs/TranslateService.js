// Interface
export class TranslateService {
    constructor(apiName, apiKey){
        this.apiName = apiName;
        this.apiKey = apiKey;
    }

    translateHTML(html, language) {
        throw new Error("translateHTML method must be implemented");
    }
}