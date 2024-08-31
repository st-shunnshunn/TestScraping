import { IReadSetting } from "./IReadSetting";
import { SettingModel } from "./SettingModel";
import { join } from 'path';
import dotenv from 'dotenv';
dotenv.config();

import { dirname } from 'path';

const FILE_NAME = "setting.json";

class ReadJsonSetting implements IReadSetting {

    readSetting(): SettingModel {
        let SettingFilePath = join(process.cwd(), FILE_NAME);
        let envSettingFilePath = process.env.SCRAPING_SETTING_PATH;
        if (envSettingFilePath != null) {
            SettingFilePath = envSettingFilePath;
        }

        // TODO ファイル読み込み
        return new SettingModel();
    }

}

export { ReadJsonSetting };