import { ScrapingSettingsFactory, Setting } from "../models/scraping/scrapingSetting/ScrapingSettingsFactory";
import { SettingModel } from "../models/scraping/scrapingSetting/SettingModel";

class ScrapingSettings {
    public readSetting(): SettingModel {
        let setting: SettingModel = new SettingModel();
        try {
            const settingFactory = ScrapingSettingsFactory.getReadSetting(Setting.JSON_File);
            setting = settingFactory.readSetting();
        } catch (error) {
            // Do nothing
        }

        return setting;
    }
}

export { ScrapingSettings };