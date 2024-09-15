import { IWebDriver } from "../models/webdriver/IWebDriver";
import { ScrapingSettings } from "../models/ScrapingSettings";
import { ScrapingMainHandler } from "../models/scraping/ScrapingMainHandler";

import { IHandler } from "../models/scraping/IHandler";
import { INotify } from "../models/notify/INotify";
import { NotifyServiceAbstract } from "./NotifyServiceAbstract";

class ScrapingService extends NotifyServiceAbstract {
    private readonly webDriver: IWebDriver;
    private readonly mainHandle: ScrapingMainHandler;

    constructor(webDriver: IWebDriver, handlers: IHandler[]) {
        super();
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

    async start() {
        const test = new ScrapingSettings().readSetting();
        const ret = await this.mainHandle.start();
        this.notify("", `結果=${ret}`);
    }

}

export { ScrapingService };