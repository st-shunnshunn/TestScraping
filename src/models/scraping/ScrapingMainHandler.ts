import { ScrapingHandlerAbstract } from "./ScrapingHandlerAbstract";
import { WebDriverModel } from "../webdriver/WebDriverModel";

class ScrapingMainHandler extends ScrapingHandlerAbstract {

    private startUrl: string | undefined;

    constructor(private webDriver: WebDriverModel) {
        super();
    }

    public setStartPageUrl(url: string): void {
        this.startUrl = url;
    }

    public start(): Promise<boolean> {
        return this.handle(this.webDriver);
    }

    async mainHandle(driver: WebDriverModel): Promise<boolean> {
        if (this.startUrl != null) {
            await driver.get(this.startUrl);
        }
        return true;
    }
}

export { ScrapingMainHandler };