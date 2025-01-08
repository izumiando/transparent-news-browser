// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)
import { SearchRepository } from '../Repositories/SearchRepository'
import { Article } from '../Entities/Article'

export class PerformSearchUseCase {
    searchRepository: SearchRepository

    constructor(searchRepository: SearchRepository){
        this.searchRepository = searchRepository; // searchRepository should be an SearchRepositoryImpl object
    }

    // Validate input, calls the SearchRepository, and return results as SearchResult object
    async execute(query: string){
        // as a next step, translate query before running the search
        const rawResults: any = await this.searchRepository.getRawResults(query); // change typing later
        console.log("in the PerformSearchUseCase execute func");
        console.log(rawResults["NewsAPI"][1]);
        const searchResult = await this.formatResults(rawResults);
        return searchResult;
    }

    formatResults(results: any){ // change typing later
        // check what API it is from, format the data to make Articles object
        const formattedResults: Article[] = [];
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
                    const newArticle: Article = new Article({
                        title = article['title'],
                        author = article['author'],
                        date = article['publishedAt'],
                        ns = null,
                        url = article['url'],
                        description = article['description'],
                        html = null,
                        translated_html = null,
                        sourceAPI = "NewsAPI",
                        
                    });
                    formattedResults.push(newArticle);
                }
            }
        }
        //console.log(formattedResults[0]);
        return formattedResults;
    }

}