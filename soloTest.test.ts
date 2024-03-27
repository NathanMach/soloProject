import { bikeBuilder } from "./soloObject";
const page = new bikeBuilder()

test('Building S1000RR', async () => {
    await page.build()
})

test('Demo ride', async () => {
    await page.demoRide()
}) 

test('scrolling the home page', async () => {
    await page.scrollHome()
})

test('dealer location', async () => {
    await page.dealerFinder()
})

test('footer scrolling', async () => {
    await page.bottomScroll()
    await page.driver.quit()
})

