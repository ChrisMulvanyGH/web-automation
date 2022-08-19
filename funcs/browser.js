const launchChrome = async () => {
    const puppetter = require('puppeteer');

    const args = [
        "--disable-dev-shm-usage", // Writes shared memory files into '/tmp' instead of '/dev/shm'
        "--no-sandbox", // Only use this if you know it is within a safe environment
        "--disable-setuid-sandbox",  // See above
        "--disable-accelerated-2d-canvas",  // Need to find documentation
        "--disable-gpu",  // Disables using the GPU afterall it will mostly run headless
        "--lang=en-ie,en" // Set the browser language
    ];

    let chrome;  // A variable to call chrome
    try {
        // Open Chrome with the following settings
        chrome = await puppetter.launch({
            headless: true, // run in headless mode e.g. you will not see a browser window open default
            devtools: false, // does not disable devtools in Chrome
            ignoreHTTPSErrors: true, // ignores HTTPS related errors
            args, // as layedout above
            ignoreDefaultArgs: ["--disable-extensions"], // disables any installed extensions if it does not run with the preferred version of chrome
        });
        return chrome;
    } catch(e) {
        console.error('Unable to launch Chrome', e);
        return false;
    }
};