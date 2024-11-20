// writing out the logic before it slips my mind
// TranslateController - TranslateUseCase, TranslateViewModel, (Article - this guy gets passed down)
// TranslateUseCase - ScrapeRepository, TranslateRepository, (Article)
// ScrapeRespository(Impl) : scrape the html with BeautifulSoup using the url
// TranslateRepository(Impl) - TranslateService
// TranslateService : make one per translator, translates html