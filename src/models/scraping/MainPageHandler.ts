import { ScrapingHandlerAbstract } from "./ScrapingHandlerAbstract";
import { until, By } from "selenium-webdriver";
import { IWebDriver } from "../webdriver/IWebDriver";

class MainPageHandler extends ScrapingHandlerAbstract {

    async mainHandle(driver: IWebDriver): Promise<boolean> {
        let ret = await driver.transitionPage("https://www.google.com");
        //const elem1 = await driver1.wait(until.elementLocated(By.css("a[href*='mode_book']")), 10000);
        //await elem1.click();

        return true;
    }
}

export { MainPageHandler };