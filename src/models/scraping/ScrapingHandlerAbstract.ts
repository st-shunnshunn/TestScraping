import { IHandler } from "./IHandler";
import { IWebDriver } from "../webdriver/IWebDriver";
import * as utils from "../../utils/Utils";
import logger from "../../utils/Logger";

abstract class ScrapingHandlerAbstract implements IHandler {
    abstract getPriority(): number;

    protected nextHandler!: IHandler;

    /**
     *
     * 次のスクレイピングハンドラのインスタンスを設定します
     *
     * @param handler 次のスクレイピングハンドラのインスタンス
     * @returns handler
     */
    setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }


    /**
     * スクレイピングハンドラのインスタンスを実行します
     *
     * @param driver WebDriverのインスタンス
     * @returns Promise<boolean> true: 次のスクレイピングハンドラのインスタンスを実行する / false: スクレイピングを中断
     */
    async handle(driver: IWebDriver): Promise<boolean> {
        const handlerResult: boolean = await this.mainHandle(driver);
        logger.info(`${utils.getCallFunctionName()} : handlerResult=${handlerResult}`);
        if (handlerResult === false || this.nextHandler == null) {
            return false;
        } else {
            return this.nextHandler.handle(driver);
        }
    }


    abstract mainHandle(driver: IWebDriver): Promise<boolean>
}

export { ScrapingHandlerAbstract };