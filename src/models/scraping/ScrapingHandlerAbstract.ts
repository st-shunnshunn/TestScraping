import { IHandler } from "./IHandler";
import { IWebDriver } from "../webdriver/IWebDriver";
import logger from "../../utils/logger";

abstract class ScrapingHandlerAbstract implements IHandler {
    abstract getPriority(): number;

    protected nextHandler!: IHandler;

    setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    async handle(driver: IWebDriver): Promise<boolean> {
        const ret = await this.mainHandle(driver);
        logger.info(`handle result=${ret}`);
        if (ret == false || this.nextHandler == null) {
            logger.info("finishing");
            return false;
        } else {
            return this.nextHandler.handle(driver);
        }
    }

    abstract mainHandle(driver: IWebDriver): Promise<boolean>
}

export { ScrapingHandlerAbstract };