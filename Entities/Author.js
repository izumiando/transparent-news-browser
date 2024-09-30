// Author entitiy
// country, contributing platforms, known political stance / affiliations, coverage, readership, website / social media, bio

class Author {
    constructor(country, ns, affiliations, coverage, readership, website, bio){
        this.country = country;
        this.ns = ns; // list of NewsSources they contribute to
        this.affiliations = affiliations;
        this.coverage = coverage;
        this.readership = readership;
        this.website = website;
        // add social media
        this.bio = bio;
    }
}