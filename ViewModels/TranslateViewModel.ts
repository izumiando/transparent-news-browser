import { Article } from "../Entities/Article"

export class TranslateViewModel{
    constructor(){}

    execute(translatedArticle: Article){
        return translatedArticle;
    }
}