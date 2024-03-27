import { By } from "selenium-webdriver";
import { BasePage } from "./basePage"
const fs = require('fs')

export class bikeBuilder extends BasePage {
    menu: By = By.xpath('//button[@class="burger searchBtn--search-normal"]')
    model: By = By.xpath('(//span[@class="mainnavigation__headline mainnavigation__headline--firstLevel"])[1]')
    sport: By = By.xpath('(//span[@class="mainnavigation__headline mainnavigation__headline--secondLevel mainnavigation__headline--text"])[1]')
    s1000: By = By.xpath('(//span[text()="S 1000 RR"])[1]')
    buildBike: By = By.xpath('(//a[@class="btn btn--secondary--white mnm-add-consent-cookie-parameter mnm-wrap-link mnm-add-dealer-parameter mnm-auto-dlo-url mnm-no-auto-link-arrow mnm-tracking-link mnm-tracking-link-label mnm-internal-link"])[2]')
    nextStep: By = By.xpath('//button[text()="Next Step"]')
    black: By = By.xpath('(//div[@class="checkbox"])[1]')
    okay: By = By.xpath('(//a[@class="button button-primary ng-binding"])[5]')
    premium: By = By.xpath('(//div[@class="checkbox"])[1]')
    wheels: By = By.xpath('(//div[@class="checkbox"])[8]')
    summary: By = By.xpath('(//button[text()="Show Summary"])[2]')
    events: By = By.xpath('(//a[@class="quickentries__link mnm-add-dealer-parameter mnm-add-consent-cookie-parameter mnm-tracking-link mnm-tracking-link-label mnm-internal-link"])[9]')
    hand: By = By.xpath('(//div[@class="eventhighlights__date"])[2]')
    scrollTheHome: By = By.xpath('//span[@class="rightArrow"]')
    dealer: By = By.xpath('//button[@class="dealer-state"]')
    input: By = By.xpath('//input[@class="searchLocation__inputField"]')
    branch: By = By.xpath('(//div[@class="dealermap__branch-innerWrapper"])[1]')
    bottom1: By = By.xpath('(//span[text()="Sport"])[2]')
    bottomM: By = By.xpath('(//span[text()="M"])[2]')
    bottomTour: By = By.xpath('(//span[text()="Tour"])[2]')
    roadster: By = By.xpath('(//span[text()="Roadster"])[2]')
    heritage: By = By.xpath('(//span[text()="Heritage"])[2]')
    adventure: By = By.xpath('(//span[text()="Adventure"])[2]')
    urban: By = By.xpath('(//span[text()="Urban Mobility"])[2]')

    constructor () {
        super ({url: "https://www.bmwmotorcycles.com/en/home.html?tl=sea-goog-aosl-brnd-miy-bran-.-.-.-.-327f7e1f4c57&gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQHFUuhpIQRotWFRxt5-c14KjLIt77EzDi9wlnDixrrutPoLL-bB-AxoC2TQQAvD_BwE&gclsrc=aw.ds#/filter-all"})
    };

    async scroll() {
        const frame = await this.driver.findElement(this.wheels);

        await this.driver.actions()
            .move({ origin: frame })
            .perform();
        };

    async build (){
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.click(this.menu)
        await this.click(this.model)
        await this.click(this.sport)
        await this.click(this.s1000)
        await this.navigate('https://configurator.bmwmotorcycles.com/index_en_US.html?country=US&tl=sea-goog-aosl-brnd-miy-bran-.-.-.-.-327f7e1f4c57#/configurator/24K6/P0N3H,S0182,S018B,S018D,S0192,S019B,S0222,S031A,S04U1,S0539,S053B,S0590,S05AC,S06AB,S06AC,S06AE/SE_TEXT')
        await this.click(this.nextStep)
        await this.click(this.black)
        await this.click(this.okay)
        await this.click(this.nextStep)
        await this.click(this.premium)
        await this.driver.sleep(4000)
        await this.click(this.nextStep)
        await this.scroll()
        await this.click(this.wheels)
        await this.driver.sleep(4000)
        await this.click(this.nextStep)
        await this.driver.sleep(4000)
        await this.click(this.nextStep)
        await this.driver.sleep(4000)
        await this.click(this.summary)
        await this.driver.sleep(4000)
    }

    async demoRide (){
        await this.driver.manage().window().maximize()
        await this.driver.sleep(3000)
        await this.navigate('https://www.bmwmotorcycles.com/en/home.html?tl=sea-goog-aosl-brnd-miy-bran-.-.-.-.-327f7e1f4c57&gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQHFUuhpIQRotWFRxt5-c14KjLIt77EzDi9wlnDixrrutPoLL-bB-AxoC2TQQAvD_BwE&gclsrc=aw.ds#/filter-all')
        await this.driver.navigate().refresh()
        await this.click(this.menu)
        await this.click(this.events)
        await this.driver.sleep(3000)
        await this.click(this.hand)
        await this.driver.sleep(5000)
    }

    async scrollHome () {
        await this.navigate('https://www.bmwmotorcycles.com/en/home.html#/filter-all')
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
        await this.click(this.scrollTheHome)
        await this.driver.sleep(3000)
    }

    async dealerFinder() {
        await this.navigate('https://www.bmwmotorcycles.com/en/home.html#/filter-all')
        await this.driver.sleep(3000)
        await this.click(this.dealer)
        await this.driver.sleep(3000)
        await this.setInput(this.input, '84065\n')
        await this.driver.sleep(3000)
        await this.click(this.branch)
        await this.driver.sleep(3000)
    }

    async bottomScroll() {
        await this.navigate('https://www.bmwmotorcycles.com/en/home.html#/filter-all')
        await this.click(this.bottom1)
        await this.driver.sleep(3000)
        await this.click(this.bottomM)
        await this.driver.sleep(3000)
        await this.click(this.bottomTour)
        await this.driver.sleep(3000)
        await this.click(this.roadster)
        await this.driver.sleep(3000)
        await this.click(this.heritage)
        await this.driver.sleep(3000)
        await this.click(this.adventure)
        await this.driver.sleep(3000)
        await this.click(this.urban)
        await this.driver.sleep(3000)
    }
}


