const puppeteer = require('puppeteer')
const screenshot = 'github.png';
(async () => {
  const browser = await puppeteer.launch({headless: true, defaultViewport: null//{
     //width:1900,
      //height:1080
   // }
})
  const page = await browser.newPage()
	await page.setViewport({width:960,height:768});

  //await page.setDefaultNavigationTimeout(0);
  await page.goto('https://github.com/login', { waitUntil: 'networkidle2', timeout: 500000 })
  await page.type('#login_field', 'kk-naidu')
  await page.type('#password', 'kknaiduRND123')
  await page.click('[name="commit"]')
  await waitFor();
  //const logo = await page.waitForSelector('.footer');
 //const logo = await page.waitForSelector('.dashboard-notice');
 //const logo = await page.waitForSelector('div.position-relative.js-header-wrapper');
   const logo = await page.waitForSelector('div.width-full.container');
	// width-full container
  //await waitFor();
  //await page.screenshot({ path: screenshot })
	const base64 = await logo.screenshot({ encoding: "base64" });
	console.log('data:image/png;base64,',base64);
  await browser.close()
 // console.log('See screenshot: ' + screenshot) ;//data:image/png;base64,
})();
const waitFor = async () => {
	new Promise((resolve, reject) =>{
		return  resolve(setTimeout(()=>{}, 2000));
	});
};
