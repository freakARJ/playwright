const { test, expect } = require('@playwright/test');

test ('Home Page',async ({page})=>{

await page.goto('https://www.demoblaze.com/');

const pageTitle=await page.title();
console.log('Page Title is : ', pageTitle);

await expect(page).toHaveTitle('STORE');

const pageUrl = await page.url();
console.log('URL is : ',pageUrl);

await expect(page).toHaveURL('https://www.demoblaze.com/');

await page.close();

})