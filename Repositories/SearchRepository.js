// Interface
class SearchRepository {
    execute(query) {
        throw new Error("search method must be implemented");
    }
}

export default SearchRepository;