const puppeteer = require('puppeteer');

console.log('Bem-vindo ao Bot conversor 💰💲');

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const moedaBase = 'dolar';
    const moedaFinal = 'real';
    const qualquerUrl = `https://www.google.com/search?sxsrf=ALeKk01j1m4ZRc-1z5lXw3rELdxmiGMjMA:1614737364370&ei=1O8-YImbFpnN5OUPj72HgAI&q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyAggAMgcIABCxAxAKOgQIABBHUL4FWL4FYOgGaABwAngAgAGOAogBrAOSAQUwLjEuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwiJ1Yi4hZPvAhWZJrkGHY_eASAQ4dUDCA0&uact=5`;
    await page.goto(qualquerUrl);
    // await page.screenshot({ path: 'example.png' });

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
      });

    console.log(`O valor de 1${moedaBase} em ${moedaFinal} é ${resultado}`);
    // await browser.close();
}

robo();