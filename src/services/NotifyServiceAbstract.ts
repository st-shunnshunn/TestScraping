import { INotify } from "../models/notify/INotify";

abstract class NotifyServiceAbstract {
    private notifyList: INotify[] = [];

    public setNotify(notifyList: INotify[]): void {
        this.notifyList = notifyList;
    }

    async notify(tile: string, message: string): Promise<void> {
        this.notifyList?.map(v => v.notify(tile, message));
    }
}

export { NotifyServiceAbstract };