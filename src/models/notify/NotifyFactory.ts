import { INotify } from './INotify';
import { LineNotify } from './LineNotify';
import { NotifyType } from "./NotifyType";

class NotifyFactory {

    static getNotify(notifyType: NotifyType): INotify {
        switch (notifyType) {
            case NotifyType.Line:
                return new LineNotify();
            default:
                throw new Error(`Unsupported notify type: ${NotifyType[notifyType]}`);
        }
    }
}

export { NotifyFactory };