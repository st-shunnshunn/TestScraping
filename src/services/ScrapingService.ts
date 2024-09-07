import { IWebDriver } from "../models/webdriver/IWebDriver";
import { ScrapingSettings } from "../models/ScrapingSettings";
import { ScrapingMainHandler } from "../models/scraping/ScrapingMainHandler";

import { LineNotify } from "../models/notify/LineNotify";
import { IHandler } from "../models/scraping/IHandler";

class ScrapingService {
    private readonly webDriver: IWebDriver;
    private readonly mainHandle: ScrapingMainHandler;

    constructor(webDriver: IWebDriver, handlers: IHandler[]) {
        this.webDriver = webDriver;

        this.mainHandle = new ScrapingMainHandler(this.webDriver)
        this.initHandlers(this.mainHandle, handlers);
    }

    private initHandlers(mainHandle: ScrapingMainHandler, handlers: IHandler[]) {
        handlers.reduce((curent, next) => {
            curent.setNext(next)
            return next
        }, mainHandle);
    }

    async main(handlers: IHandler[]) {
        //await new LineNotify().notify("test", "test");

        const test = new ScrapingSettings().readSetting();
        this.mainHandle.start();
    }

}

export { ScrapingService };