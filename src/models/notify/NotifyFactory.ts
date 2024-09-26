import { INotify } from './INotify';
import { LineNotify } from './LineNotify';
import { NotifyType } from "./NotifyType";

class NotifyFactory {


    /**
     * NotifyTypeに対応するINotifyを取得します
     * @param {NotifyType} notifyType INotifyの種類
     * @returns {INotify} INotifyのインスタンス
     * @throws {Error} Unsupported notify type
     */
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