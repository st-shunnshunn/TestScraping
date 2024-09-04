import { IWebDriver } from "../models/webdriver/IWebDriver";
import { ScrapingSettings } from "../models/ScrapingSettings";
import { ScrapingMainHandler } from "../models/scraping/ScrapingMainHandler";
import { MainPageHandler } from "../models/scraping/MainPageHandler";

import { LineNotify } from "../models/notify/LineNotify";

class ScrapingService {
    private readonly webDriver: IWebDriver;

    constructor(webDriver: IWebDriver,) {
        this.webDriver = webDriver;
    }

    async main() {
        //await new LineNotify().notify("test", "test");

        const test = new ScrapingSettings().readSetting();

        await this.webDriver.transitionPage("https://www.google.com/");

        // 引数？
        const handle = new ScrapingMainHandler(this.webDriver)
        handle.setNext(new MainPageHandler());
        handle.start();
    }

}

export { ScrapingService };