import { WebDriverAbstract } from "./WebDriverAbstract";
import { WebDriverModel } from "./WebDriverModel";
import { Options } from 'selenium-webdriver/chrome';
import { Builder } from "selenium-webdriver";

class Chrome extends WebDriverAbstract {

    /**
     * ChromeのWebDriverを生成する
     *
     * @returns {Promise<selenium.WebDriverModel>} WebDriver
     */
    buildWebDriver(): WebDriverModel {
        const chromeOptions = new Options()
            .excludeSwitches('enable-logging', 'enable-automation')
            .addArguments('--disable-gpu')
            .addArguments('--disable-extensions')
            .addArguments('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')
            .addArguments('--disable-blink-features=AutomationControlled');

        try {
            return new Builder().forBrowser('chrome').setChromeOptions(chromeOptions as any).build();
        } catch (error) {
            throw error;
        }
    }

}

export { Chrome };