// Interface
export class TranslateService {
    apiName: string;
    apiKey: string;

    constructor(apiName: string, apiKey: string){
        this.apiName = apiName;
        this.apiKey = apiKey;
    }

    translateHTML(html: string, language: string) {
        throw new Error("translateHTML method must be implemented");
    }
}