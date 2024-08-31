import { WebDriverAbstract, selenium } from "./WebDriverAbstract";
import { Options } from 'selenium-webdriver/chrome';

class Chrome extends WebDriverAbstract {

    /**
     * ChromeのWebDriverを生成する
     *
     * @returns {Promise<selenium.ThenableWebDriver>} WebDriver
     */
    async buildWebDriver(): Promise<selenium.ThenableWebDriver> {
        const chromeOptions = new Options()
            .excludeSwitches('enable-logging', 'enable-automation')
            .addArguments('--disable-gpu')
            .addArguments('--disable-extensions')
            .addArguments('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')
            .addArguments('--disable-blink-features=AutomationControlled');

        try {
            return new selenium.Builder().forBrowser('chrome').setChromeOptions(chromeOptions as any).build();
        } catch (error) {
            throw error;
        }
    }

}

export { Chrome };