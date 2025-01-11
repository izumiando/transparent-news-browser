import { Article } from '../backend/Entities/Article' 

export class SearchViewModel{
    constructor(){}

    execute(searchResult: Article[]){
        return searchResult;
    }
}