import { IWebDriver } from "../models/webdriver/IWebDriver";
import { ScrapingSettings } from "../models/ScrapingSettings";

class ScrapingService {
    private readonly webDriver: IWebDriver;

    constructor(webDriver: IWebDriver,) {
        this.webDriver = webDriver;
    }

    public main() {
        const test = new ScrapingSettings().readSetting();
    }

}

export { ScrapingService };