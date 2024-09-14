import { WebDriverFactory, Browser } from './models/webdriver/WebDriverFactory'
import { IWebDriver } from './models/webdriver/IWebDriver';

import { ScrapingService } from './services/ScrapingService';
import LoadScrapingHandler from './models/scraping/LoadScrapingHandler';
import logger from './utils/Logger';

if (require.main === module) {
    logger.info('start');
    main()
}


async function main() {
    try {
        const webDriver: IWebDriver = WebDriverFactory.getDriver(Browser.Chrome);
        const handlers = await new LoadScrapingHandler().load();
        await new ScrapingService(webDriver, handlers).main(handlers)

        // 外部ファイルで操作するようにする
    } catch (e: unknown) {
        console.log(e);
    }
}

