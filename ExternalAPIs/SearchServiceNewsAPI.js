// SearchServiceNewsAPI.js

class SearchServiceNewsAPI extends SearchService {
    constructor (){
        super("NewsAPI", "aa563547e9744968a5cbe499a122f5ed");
    }

    searchArticles(query) {
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${this.apiKey}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {return data.articles;}) // details of data.articles structure https://newsapi.org/docs/get-started#search
            .catch(error => {console.error('Error fetching news:', error);
                throw error;});
    }
}

export default SearchServiceNewsAPI;