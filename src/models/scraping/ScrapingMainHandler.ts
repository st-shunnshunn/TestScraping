import { ScrapingHandlerAbstract } from "./ScrapingHandlerAbstract";
import { IWebDriver } from "../webdriver/IWebDriver";

class ScrapingMainHandler extends ScrapingHandlerAbstract {

    constructor(private webDriver: IWebDriver) {
        super();
    }

    public start(): Promise<boolean> {
        return this.handle(this.webDriver);
    }

    async mainHandle(driver: IWebDriver): Promise<boolean> {
        return true;
    }
}

export { ScrapingMainHandler };