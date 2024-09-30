// Account entitiy
// name/nickname, country, email, password, collection, topics

class Account {
    constructor(username, country, email, password, collection, topics){
        this.username = username;
        this.country = country;
        this.email = email;
        this.password = password;
        this.collection = new Array();
        this.topics = new Array();
    }
}