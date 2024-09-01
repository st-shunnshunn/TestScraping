import { WebDriverModel } from "../webdriver/WebDriverModel";

interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(driver: WebDriverModel): Promise<boolean>;
}

export { IHandler };