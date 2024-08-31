import { WebDriverModel } from "./WebDriverModel";

interface IWebDriver {
  initializeWebDriver(): WebDriverModel
}

export { IWebDriver };