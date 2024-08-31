import { IWebDriver, selenium } from "./IWebDriver"

abstract class WebDriverAbstract implements IWebDriver {

  /**
   * WebDriverのインスタンスを生成する
   *
   * @returns {Promise<selenium.ThenableWebDriver>} 生成されたWebDriver
   */
  async initializeWebDriver(): Promise<selenium.ThenableWebDriver> {
    return this.buildWebDriver();
  }

  abstract buildWebDriver(): Promise<selenium.ThenableWebDriver>;
}

export { WebDriverAbstract, selenium };