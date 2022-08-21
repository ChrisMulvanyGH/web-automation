const puppeteer = require('puppeteer');

(async () => {
    'use strict'
    const store = 'https://www.amazon.com/';
    const bookChoice = 'American Dirt';

    // Puppeteer configuration
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
    // Open website in a new tab and wait until page is loaded
    const page = await browser.newPage();
    await page.goto(store);
    await page.waitForSelector('#a-page');
    console.log("========== PAGE LOADED ==========");
    await page.waitForTimeout(2000);

    // Type the Book Title and click Search button
    await page.type('input[name=field-keywords]', bookChoice);
    await page.click('input[id=nav-search-submit-button]');
    await page.waitForTimeout(2000);

    // Choose first result when the search results have loaded
    console.log("========== RESULTS LOADED ==========");
    await page.waitForSelector('.a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style');
    await page.click('h2 a');
    console.log("Book Title - clicked!!");
    await page.waitForTimeout(2000);

    // Add to cart
    await page.waitForSelector('.a-button-stack');
    await page.click('input[id=add-to-cart-button]');
    console.log("Add to Cart - clicked!!");
    await page.waitForTimeout(2000);

    // Proceed to checkout
    await page.waitForSelector('#sw-atc-buy-box');
    await page.click('input[data-feature-id=proceed-to-checkout-action]');
    console.log("Proceed to Checkout - clicked!!");
    await page.waitForTimeout(2000);

    await browser.close();

})();