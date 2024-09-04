import { IWebDriver } from "../webdriver/IWebDriver";

interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(driver: IWebDriver): Promise<boolean>;
}

export { IHandler };