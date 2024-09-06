import { IWebDriver } from "../models/webdriver/IWebDriver";
import { ScrapingSettings } from "../models/ScrapingSettings";
import { ScrapingMainHandler } from "../models/scraping/ScrapingMainHandler";
import LoadScrapingHandler from "../models/scraping/LoadScrapingHandler";

import { LineNotify } from "../models/notify/LineNotify";
import { IHandler } from "../models/scraping/IHandler";

class ScrapingService {
    private readonly webDriver: IWebDriver;

    constructor(webDriver: IWebDriver,) {
        this.webDriver = webDriver;
    }

    async main(handlers: IHandler[]) {
        //await new LineNotify().notify("test", "test");

        const test = new ScrapingSettings().readSetting();

        const startHandle = new ScrapingMainHandler(this.webDriver)
        handlers.reduce((curent, next) => {
            curent.setNext(next)
            return next
        }, startHandle);

        startHandle.start();
    }

}

export { ScrapingService };