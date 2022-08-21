const puppeteer = require('puppeteer');

(async () => {
    'use strict'

    const url = 'https://www.goodreads.com/choiceawards/best-books-2020';
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
    const page = await browser.newPage();
    console.log('Opening ' + url);
    try {
        await page.goto(url, {
            waitUntil: 'networkidle0',
        });
    } catch(err) {
        console.error('Unable to visit: ' + url, err);
        await browser.close();
    }
        
    const genres = await page.evaluate(() => {
        const genre = document.querySelectorAll('.category.clearFix');
        const allGenres = [];

        for(let i=0; i<genre.length; i++) {
            allGenres.push({
                title: genre[i].querySelector('h4').innerText,
                link: genre[i].querySelector('a[href').href
            });
        }
        return allGenres;
    });
    console.log(genres);
    return genres;

})();