import { IWebDriver } from './webdriver/IWebDriver';
import { Chrome as ChromeWebDriver } from './webdriver/Chrome';

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
        let driverPromise: IWebDriver;
        switch (browser) {
            case Browser.Chrome:
                driverPromise = new ChromeWebDriver();
                break;
            default:
                throw new Error(`Unsupported browser: ${browser}`);
        }

        return driverPromise;
    }
}

export { WebDriverFactory, Browser };