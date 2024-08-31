import { IWebDriver } from './IWebDriver';
import { Chrome as ChromeWebDriver } from './Chrome';

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
                driver = new ChromeWebDriver();
                break;
            default:
                throw new Error(`Unsupported browser: ${Browser[browser]}`);
        }

        return driver;
    }
}

export { WebDriverFactory, Browser };