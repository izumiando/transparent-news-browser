// Interface
export class SearchRepository {
    getRawResults(query: string) {
        throw new Error("search method must be implemented");
    }
}