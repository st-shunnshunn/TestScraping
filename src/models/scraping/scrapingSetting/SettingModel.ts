class SettingModel {

    constructor() {
    }
    static build(builder: SettingModelBuilder): SettingModel {
        return new SettingModel();
    }
}

class SettingModelBuilder {

    public setNextAction(): SettingModelBuilder {
        // TODO Chainパターンで実装
        // TODO インターフェースを作る
        return this;
    }

    public build(): SettingModel {
        return SettingModel.build(this);
    }
}

export { SettingModel, SettingModelBuilder };