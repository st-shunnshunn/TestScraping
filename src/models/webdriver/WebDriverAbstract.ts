import { IWebDriver } from "./IWebDriver"
import { WebDriverModel } from "./WebDriverModel";

abstract class WebDriverAbstract implements IWebDriver {

  /**
   * WebDriverのインスタンスを生成する
   *
   * @returns {WebDriverModel} 生成されたWebDriver
   */
  initializeWebDriver(): WebDriverModel {
    return this.buildWebDriver();
  }

  abstract buildWebDriver(): WebDriverModel;
}

export { WebDriverAbstract };