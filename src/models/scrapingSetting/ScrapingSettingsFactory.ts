import { IReadSetting } from "./IReadSetting";
import { ReadJsonSetting } from "./ReadJsonSetting";

enum Setting {
    JSON_File,
}

class ScrapingSettingsFactory {
    static getReadSetting(settingType: Setting): IReadSetting {
        let readSetting: IReadSetting;
        switch (settingType) {
            case Setting.JSON_File:
                readSetting = new ReadJsonSetting();
                break;
            default:
                throw new Error(`Unsupported setting type: ${Setting[settingType]}`);
        }

        return readSetting;
    }
}

export { ScrapingSettingsFactory, Setting };