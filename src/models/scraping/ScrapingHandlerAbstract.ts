import { IHandler } from "./IHandler";
import { WebDriverModel } from "../webdriver/WebDriverModel";
import logger from "../../utils/logger";

abstract class ScrapingHandlerAbstract implements IHandler {
    protected nextHandler!: IHandler;

    setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    async handle(driver: WebDriverModel): Promise<boolean> {
        const ret = await this.mainHandle(driver);
        logger.info(`handle result=${ret}`);
        if (ret == false || this.nextHandler == null) {
            logger.info("finishing");
            return false;
        } else {
            return this.nextHandler.handle(driver);
        }
    }

    abstract mainHandle(driver: WebDriverModel): Promise<boolean>
}

export { ScrapingHandlerAbstract };