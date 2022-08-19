const scrapeData = async () => {
    // Import the launchChrome() from 'browser.js'
    const { launchChrome } = require('./browser');

    // Launcging Chrome and Opening a new Tab/Page
    const [newPage, exitChrome] = await launchChrome();
    const [page] = await newPage;
    if(!page) return;  // Exit if the page has not opened properly

    // Visit a website url
    const url = 'http://www.domain.com';
    console.log('Opening ' + url );
    try {
        await page.goto(url, {
            waitUntil: 'networkidle0' // Wait until all network requests have been processed
        });
    } catch(e) {
        console.log("Unable to visit " + url, e);
        await exitChrome(); // Close chrome on error
        return; // Exit the function
    }

    await exitChrome(); // Close Chrome
};

module.exports = scrapeData;