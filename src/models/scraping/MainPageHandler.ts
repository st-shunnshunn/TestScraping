import { ScrapingHandlerAbstract } from "./ScrapingHandlerAbstract";
import { WebDriverModel } from "../webdriver/WebDriverModel";
import { until, By } from "selenium-webdriver";

class MainPageHandler extends ScrapingHandlerAbstract {

    async mainHandle(driver: WebDriverModel): Promise<boolean> {
        let driver1 = await driver;
        const elem1 = await driver1.wait(until.elementLocated(By.css("a[href*='mode_book']")), 10000);
        await elem1.click();

        return true;
    }
}

export { MainPageHandler };