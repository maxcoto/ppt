const puppeteer = require('puppeteer');

(async () => {
  
  const production = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
  
  const browser = await puppeteer.launch(production);
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

