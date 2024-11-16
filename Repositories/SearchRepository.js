// Interface
class SearchRepository {
    getRawResults(query) {
        throw new Error("search method must be implemented");
    }
}

export default SearchRepository;