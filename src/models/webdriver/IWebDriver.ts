import * as selenium from "selenium-webdriver";

interface IWebDriver {
  initializeWebDriver(): Promise<selenium.ThenableWebDriver>
}

export { selenium, IWebDriver };