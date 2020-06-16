How to view the mockup:
1. Make sure you are in 'ui-mockup' folder.
2. Run `yarn start` (or `npm run start`).
3. Check localhost:3000.

How I approached this mockup: 
    - I decided to use React because although it's quite a simple app, I wanted to make use of state for the open/close email feature.
    - I designed the CSS with a mobile-first approach. Once the mobile view was done, I refined the CSS with media queries that would apply once the screen size got bigger. 
    - In order to keep elements in their place, I used CSS Grid with a few flexbox elements within the grid where necessary.
    - I also added a JS function in EmailDisplay.js to check the screen size in case the user manually resized their screen.
    - I used moment.js to format the dates easily.
    - The hardest part was getting the individual email display to line up nicely for all elements across screen sizes.

---
Because the data is hardcoded, you can't see the "NoMatches.js" screen by default, but the following steps will display it:
1. Comment out lines 25 - 42 in `ResultsList.js`
2. Add `<NoMatches />` under the commented out lines.
3. Check localhost.