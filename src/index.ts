import { WebDriverFactory, Browser } from './models/webdriver/WebDriverFactory'
import { IWebDriver } from './models/webdriver/IWebDriver';

import { ScrapingService } from './services/ScrapingService';
import LoadScrapingHandler from './models/scraping/LoadScrapingHandler';
import logger from './utils/Logger';
import { NotifyType } from './models/notify/NotifyType';
import { NotifyFactory } from './models/notify/NotifyFactory';
import { INotify } from './models/notify/INotify';

if (require.main === module) {
    logger.info('start');
    main()
}


async function main() {
    try {
        const webDriver: IWebDriver = WebDriverFactory.getDriver(Browser.Chrome);
        const listNotify: INotify = NotifyFactory.getNotify(NotifyType.Line);
        const handlers = await new LoadScrapingHandler().load();

        const scraping: ScrapingService = new ScrapingService(webDriver, handlers)
        scraping.setNotify([listNotify]);
        await scraping.start();

        // 外部ファイルで操作するようにする
    } catch (e: unknown) {
        console.log(e);
    }
}

