import { WebDriverAbstract, ActionElement } from "./WebDriverAbstract";
import { Options } from 'selenium-webdriver/chrome';
import { Builder, until, By, WebElement } from "selenium-webdriver";
import logger from "../../utils/Logger";

class SeleniumChromeWebDriver extends WebDriverAbstract {
    constructor() {
        const chromeOptions = new Options()
            .excludeSwitches('enable-logging', 'enable-automation')
            .addArguments('--disable-gpu')
            .addArguments('--disable-extensions')
            .addArguments('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')
            .addArguments('--disable-blink-features=AutomationControlled');
        const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions as any).build();
        super(driver);
    }

    async transitionPage(url: string): Promise<boolean> {
        let ret = false;
        try {
            await this.webDriver.get(url);
            ret = true;
        } catch (e) {
            ret = false;
            logger.error(e);
        }
        return ret;
    }

    async searchContent(selector: string, fn: Function): Promise<string> {
        return "";
    }
    async clickElement(selector: string): Promise<boolean> {
        let ret = false;
        try {
            const elem: WebElement = await this.webDriver.wait(until.elementLocated(By.css(selector)), 10000);
            await elem.click();
            ret = true;
        } catch (e) {
            ret = false;
            logger.error(e);
        }
        return ret;
    }
    async actionElement(selector: string, fn: ActionElement<Array<WebElement>, Boolean>): Promise<boolean> {
        let ret = false;
        try {
            const elems: WebElement[] = await this.webDriver.findElements(By.css(selector));
            // TODO 本来であれば、インターフェースに外部から使用する定義を作成すべき
            fn(elems);
            return true;
        } catch (e) {
            ret = false;
            logger.error(e);
        }
        return ret;
    }

    async waitViewElement(selector: string, time: number = 1000): Promise<void> {
        await this.webDriver.wait(until.elementLocated(By.css(selector)), time);
    }
}
export { SeleniumChromeWebDriver };