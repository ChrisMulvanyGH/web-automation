# Thought Process

A quick overview of how I approached this challenge, I initially had two thought processes but wittled these down to the below solution.

## Solution

Quick High Level Overview:  Scrape all book genres from the page, collect their titles and click the Genre Title Links to scrape the list of books within that genre. Then scrape all books within that url which will include the book name and author.  Save all data to a json file where each genre will be created and within that genre will be a list of all the books with the title and author.

## Steps to Take

- Launch Chrome and open a new Page
- Visit the page to scrape the book genres
- On this page scrape all Genre titles and title links
- Identify the selector containing all Genres on this page (id='categories')
- Identify the selector of individual categories (class='.category.clearFix')
- Identify the selector of the title of each category (h4)
- Click on the title for each genre category
- Visit the genre page and scrape all book titles and their author
- Identify the selector containing all Books on this page (class='.pollContents')
- Identify the selector of individual Books (class='.inlineblock.pollAnswer.resultShown)
- Identify the selector of the Book Title and Author (img[alt])
- Create an Areray of Objects where each Book Title & Author is place into an object under the Genre Title
- Create a new JSON file with the above structure Genre Title - Book Title & Author
