import { WebDriverFactory, Browser } from './models/WebDriverFactory'


if (require.main === module) {
    main()
}


async function main() {
    try {
        const driver = await WebDriverFactory.getDriver(Browser.Chrome).initializeWebDriver();
        await driver.get('https://www.google.com');

        // 外部ファイルで操作するようにする
    } catch (e: unknown) {
        console.log(e);
    }
}

