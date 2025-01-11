// Interface
export class TranslateRepository {
    translate(html: string | null, language: string, translator: string) {
        throw new Error("search method must be implemented");
    }
}