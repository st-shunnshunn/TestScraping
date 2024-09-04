import { IWebDriver } from "./IWebDriver"
import { WebDriver } from "selenium-webdriver"

abstract class WebDriverAbstract implements IWebDriver {

  constructor(protected webDriver: WebDriver) {
  }

  abstract transitionPage(url: string): Promise<boolean>;
  abstract searchContent(selector: string, fn: Function): Promise<string>;
  abstract clickElement(selector: string): Promise<boolean>;
  abstract actionElement(elector: string, fn: Function): Promise<boolean>;
}

export { WebDriverAbstract };