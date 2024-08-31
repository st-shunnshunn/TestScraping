import { ScrapingSettingsFactory, Setting } from "./scrapingSetting/ScrapingSettingsFactory";
import { SettingModel } from "./scrapingSetting/SettingModel";

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