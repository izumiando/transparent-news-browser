// SearchRepositoryImpl.js
import { SearchService } from '../backend/ExternalAPIs/SearchService'
import { SearchRepository } from './SearchRepository';

export class SearchRepositoryImpl extends SearchRepository {
    searchServices: SearchService[];

    constructor(searchServices: SearchService[]) { 
        super();
        this.searchServices = searchServices; // list of SearchService objects
    }

    async getRawResults(query: string): Promise<any> {
        const rawResults: { [key: string]: any } = {}; // change value type later
    
        // Create a list of promises for all search services
        const promises = this.searchServices.map(async (service) => {
            try {
                const data = await service.searchArticles(query);
                console.log("in ServiceRepo");
                console.log(data[1]);
                return { apiName: service.apiName, data };
            } catch (error) {
                console.error(`Error fetching data from ${service.apiName}:`, error);
                return { apiName: service.apiName, data: null }; // Gracefully handle errors
            }
        });
    
        // Resolve all promises concurrently
        const results = await Promise.all(promises);
    
        // Populate the rawResults object
        results.forEach(result => {
            rawResults[result.apiName] = result.data;
        });
    
        //console.log(Object.keys(rawResults)); // Logs resolved results
        return rawResults;
    }
    
}