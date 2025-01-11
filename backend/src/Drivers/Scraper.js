// importing libraries
import axios from 'axios';
//const cheerio = require('cheerio');

export class Scraper {
    constructor(){}

    async fetchHTML(url) {
        try {
            const { data: html } = await axios.get(url);
            return html; // returns html as a string
        } catch (error) {
            console.error('Error fetching HTML:', error.message);
            throw new Error('Failed to fetch HTML');
        }
    }

  //parseHTML(html, selector) {
  //  const $ = cheerio.load(html);
  //  return $(selector).text();
  //}
}