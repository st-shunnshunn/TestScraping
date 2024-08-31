import { WebDriverFactory, Browser } from './models/webdriver/WebDriverFactory'
import { IWebDriver } from './models/webdriver/IWebDriver';
import logger from './utils/logger';

import { ScrapingService } from './services/ScrapingService';

if (require.main === module) {
    logger.info('start');
    main()
}


async function main() {
    try {


        const webDriver: IWebDriver = WebDriverFactory.getDriver(Browser.Chrome);
        new ScrapingService(webDriver).main()

        //await driver.get('https://www.google.com');

        // 外部ファイルで操作するようにする
    } catch (e: unknown) {
        console.log(e);
    }
}

