import { SettingModel } from "./SettingModel";

class SettingModelBuilder {
    public build(): SettingModel {
        return new SettingModel(this);
    }
}