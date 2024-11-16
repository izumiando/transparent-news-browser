// Depended by SearchController
// Dependencies : SearchRepository(i), SearchResult (this could be a list of articles)

class PerformSearchUseCase {
    constructor(searchRepository, searchResult){
        this.searchRepository = searchRepository; // searchRepository should be an SearchRepositoryImpl object
    }

    // Validate input, calls the SearchRepository, and return results as SearchResult object
    execute(query){
        // as a next step, translate query before running the search
        rawResults = this.searchRepository.getRawResults(query);
        searchResult = this.formatResults(rawResults);
        return searchResult;
    }

    formatResults(results){
        // check what API it is from, format the data to make Articles object
        const formattedResults = [];
        for (let [key, value] of Object.entries(results)) {
            // new Article(title, author, data, ns, url, description, html, api)

            if(key == "NewsAPI"){ // not sure if this is going to work
                for(article in value){
                    // not sure how to get html from this one yet
                    newArticle = new Article(article.title, article.author, article.publishedAt, article.source.name, article.url, article.description, null, "NewsAPI");
                    formattedResults.push(newArticle);
                }
            }
        }
        return formattedResults;
    }

}

export default PerformSearchUseCase;