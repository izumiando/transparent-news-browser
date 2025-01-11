// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)
import { SearchRepository } from '../../Repositories/SearchRepository.js'
import { Article } from '../../Entities/Article.js'

export class PerformSearchUseCase {
    constructor(searchRepository){
        this.searchRepository = searchRepository; // searchRepository should be an SearchRepositoryImpl object
    }

    // Validate input, calls the SearchRepository, and return results as SearchResult object
    async execute(query){
        // as a next step, translate query before running the search
        const rawResults = await this.searchRepository.getRawResults(query);
        console.log("in the PerformSearchUseCase execute func");
        console.log(rawResults["NewsAPI"][1]);
        const searchResult = await this.formatResults(rawResults);
        return searchResult;
    }

    formatResults(results){
        // check what API it is from, format the data to make Articles object
        const formattedResults = [];
        console.log("we are in formatResults pre for loop");
        for (const key in results) {
            // new Article(title, author, data, ns, url, description, html, api)
            console.log("we are in this for loop");

            if(key == 'NewsAPI'){
                console.log('we are in the formatting NewsAPI results section'); //ここには至ってるけど
                // it is either that the 1) api is not returning anything or 2) i am not able to iterate through it
                for(let i = 0; i < results[key].length; i++){
                    //console.log('we are now here');　// ここに至ってないんだね
                    // not sure how to get html from this one yet
                    // not sure how to access each attribute in the NewsAPI promise
                    const article = results[key][i];
                    //console.log(article['title']);
                    const newArticle = new Article(article['title'], article['author'], article['publishedAt'], null, article['url'], article['description'], null, "NewsAPI");
                    formattedResults.push(newArticle);
                }
            }
        }
        //console.log(formattedResults[0]);
        return formattedResults;
    }

}