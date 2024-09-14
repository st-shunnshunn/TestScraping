import { NotifyAbstract } from "./NotifyAbstract";
import * as line from '@line/bot-sdk';
import { NotifyType } from "./NotifyType";
import logger from "../../utils/Logger";

class LineNotify extends NotifyAbstract {
    private readonly lineClient: line.messagingApi.MessagingApiClient;

    constructor() {
        super(NotifyType.Line);
        this.lineClient = new line.messagingApi.MessagingApiClient({
            channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
        });
    }

    async notifyMain(title: string, messageText: string): Promise<boolean> {
        try {
            const messageRequest = this.createPushMessageRequest(messageText);
            await this.lineClient.pushMessage(messageRequest);
        } catch (error: any) {
            logger.error(error);
        }
        return true;
    }

    private createPushMessageRequest(content: string): line.messagingApi.PushMessageRequest {
        return {
            to: process.env.LINE_USER_ID as string,
            messages: [{ type: 'text', text: content }]
        };
    }

}

export { LineNotify };