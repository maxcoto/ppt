const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://maxcoto.github.io/');

  const recur = async function(cont){
    try {
      await page.waitForNavigation();
    } catch (e) {
      console.log(cont);
      await recur(cont++);
    }  
  }

  await recur(0);

})();

