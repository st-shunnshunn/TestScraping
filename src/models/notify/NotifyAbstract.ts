import logger from "../../utils/logger";
import { INotify } from "./INotify";
import { NotifyType } from "./NotifyType";

abstract class NotifyAbstract implements INotify {
    constructor(protected type: NotifyType) {
    }

    async notify(tile: string, message: string): Promise<boolean> {
        logger.info(`notify event start type=${this.type} tile=${tile} message=${message}`);
        const ret = await this.notifyMain(tile, message);
        logger.info(`notify event end type=${this.type} tile=${tile} message=${message}`);
        return ret;
    }

    abstract notifyMain(tile: string, message: string): Promise<boolean>
}

export { NotifyAbstract }