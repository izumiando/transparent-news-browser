import { Article } from "../backend/Entities/Article"

export class TranslateViewModel{
    constructor(){}

    execute(translatedArticle: Article){
        return translatedArticle;
    }
}