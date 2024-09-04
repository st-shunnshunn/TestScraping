import { IWebDriver } from './IWebDriver';
import { SeleniumChromeWebDriver } from './SeleniumChromeWebDriver';

enum Browser {
    Chrome,
}

class WebDriverFactory {
    /**
     * 指定されたブラウザーに対応するWebDriverを生成する
     *
     * @param browser 対応するブラウザー
     * @returns 生成されたWebDriver
     * @throws Error 対応していないブラウザー
     */
    static getDriver(browser: Browser): IWebDriver {
        let driver: IWebDriver;
        switch (browser) {
            case Browser.Chrome:
                driver = new SeleniumChromeWebDriver();
                break;
            default:
                throw new Error(`Unsupported browser: ${Browser[browser]}`);
        }

        return driver;
    }
}

export { WebDriverFactory, Browser };