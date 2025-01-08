import { Article } from '../Entities/Article' 

export class SearchViewModel{
    constructor(){}

    execute(searchResult: Article[]){
        return searchResult;
    }
}