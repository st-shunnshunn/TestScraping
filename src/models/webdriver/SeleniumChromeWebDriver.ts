import { WebDriverAbstract } from "./WebDriverAbstract";
import { Options } from 'selenium-webdriver/chrome';
import { Builder } from "selenium-webdriver";

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
        await this.webDriver.get(url);
        return true;
    }

    async searchContent(selector: string, fn: Function): Promise<string> {
        return "";
    }
    async clickElement(selector: string): Promise<boolean> {
        return true;
    }
    async actionElement(selector: string, fn: Function): Promise<boolean> {
        return true;
    }
}

export { SeleniumChromeWebDriver };