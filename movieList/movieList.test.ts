import { Builder, Capabilities, By } from "selenium-webdriver"
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit
})

describe('Movie List Tests', () => {
    test('Should add a movie', async () => {
        let searchBar = await driver.findElement(By.xpath('//input'))
        let add = await driver.findElement(By.xpath('//button'))
    
        await searchBar.sendKeys('Clash of Titans')
    
        await add.click()
    })
    
    test('Should add a movie with enter', async () => {
        let searchBar = await driver.findElement(By.xpath('//input'))
        let add = await driver.findElement(By.xpath('//button'))
    
        await searchBar.sendKeys('Lord of the Rings')
    
        await add.sendKeys('\n')
    })
    
    test('Should cross off a movie', async () => {
        let crossOff = await driver.findElement(By.xpath('/html/body/main/ul/li[1]/span'))
    
        await crossOff.click()
    })
    
    test('Should uncross a movie', async () => {
        let uncross = await driver.findElement(By.xpath('/html/body/main/ul/li[1]/span'))
    
        await uncross.click()
    })
    
    test('Should delete a movie', async () => {
        let deleteBtn = await driver.findElement(By.xpath('//*[@id="LordoftheRings"]'))
    
        await deleteBtn.click()    
    })
})