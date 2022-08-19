const scrapeData = async () => {
    // Import the launchChrome() from 'browser.js'
    const { launchChrome } = require('./browser');

    const [newPage, exitChrome] = await launchChrome();
    const [page] = await newPage;
    if(!page) return;

    await exitChrome();
};

module.exports = scrapeData;