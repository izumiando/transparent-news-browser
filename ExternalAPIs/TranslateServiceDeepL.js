import { TranslateService } from './TranslateService.js';
import * as deepl from 'deepl-node';
// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs'); // For reading the file

export class TranslateServiceDeepL extends TranslateService{
    constructor(){
        // in the future 
        // "In production code, the authentication key should not be hard-coded but instead fetched from a configuration file or environment variable."
        super("DeepL", "a481462b-6c18-4ece-b754-a4f366d56a86:fx");
    }

    async translateHTML(html, language){ // make sure it actually awaits soemthing
        // this.upload();
        // this.checkStatus();
        // const translatedHTML = this.download();
        const translator = new deepl.Translator(this.apiKey);
        // do not hard code this this is only for now
        const translatedHTML = await translator.translateText(html, null, 'EN-US', { tag_handling: 'html' });
        return translatedHTML;
    }

    // finish the code below if you need to switch to html file upload HTTP request instead of using html as a string

    // async upload(html, language){
    //     const url = 'https://api.deepl.com/v2/document';
    //     const apiKey = this.apiKey;

    //     // Create a FormData object
    //     const formData = new FormData();
    //     // un-hard-code this part later
    //     formData.append('target_lang', 'EN-US'); // Target language
    //     formData.append('file', fs.createReadStream('document.docx')); // File to upload

    //     try {
    //         const response = await axios.post(url, formData, {
    //         headers: {
    //             ...formData.getHeaders(), // Add multipart headers
    //             Authorization: `DeepL-Auth-Key ${apiKey}`,
    //             'User-Agent': 'YourApp/1.2.3',
    //           },
    //         });

    //         console.log('Response:', response.data);
    //     } catch (error) {
    //         console.error('Error:', error.response?.data || error.message);
    //     }
    //     return response;
    // }

    // async checkStatus(){ // make this it actually awaits something if not remove async

    // }

    // async download(){ // make this it actually awaits something if not remove async

    // }
}