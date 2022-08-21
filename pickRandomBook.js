async function pickRandomBook(pgURL) {
    'use strict'
    const puppeteer = require('puppeteer');
    const url = pgURL;
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

    const getBooks = await page.evaluate(() => {
        const bookList = document.querySelectorAll('.inlineblock.pollAnswer.resultShown');
        const allBooks = [];

        for(let i=0; i<bookList.length; i++) {
            allBooks.push({
                bookTitle: bookList[i].querySelector('img[alt]').alt
            });
        }
        return allBooks;
    });

    const randomBook = getBooks[Math.floor((Math.random()*getBooks.length))];

    console.log(randomBook);
    return randomBook;
};

module.exports = {
    pickRandomBook,
}