// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)
import { SearchRepository } from '../Repositories/SearchRepository.js'
import { Article } from '../Entities/Article.js'

export class PerformSearchUseCase {
    constructor(searchRepository){
        this.searchRepository = searchRepository; // searchRepository should be an SearchRepositoryImpl object
    }

    // Validate input, calls the SearchRepository, and return results as SearchResult object
    execute(query){
        // as a next step, translate query before running the search
        const rawResults = this.searchRepository.getRawResults(query);
        const searchResult = this.formatResults(rawResults);
        return searchResult;
    }

    formatResults(results){
        // check what API it is from, format the data to make Articles object
        const formattedResults = [];
        for (let [key, value] of Object.entries(results)) {
            // new Article(title, author, data, ns, url, description, html, api)

            if(key == "NewsAPI"){ // not sure if this is going to work
                for(const article in value){
                    console.log(`${article[title]}`);
                    // not sure how to get html from this one yet
                    newArticle = new Article(article['title'], article['author'], article['publishedAt'], article['source']['name'], article['url'], article['description'], null, "NewsAPI");
                    formattedResults.push(newArticle);
                }
            }
        }
        return formattedResults;
    }

}