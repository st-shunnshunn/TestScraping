import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { IHandler } from './IHandler';
import { ScrapingHandlerAbstract } from './ScrapingHandlerAbstract';
import logger from '../../utils/Logger';

dotenv.config();

class LoadScrapingHandler {

    /**
     * スクレイピングハンドラのインスタンスを読み込みます
     * @returns {Promise<IHandler[]>} スクレイピングハンドラのインスタンス
     */
    async load(): Promise<IHandler[]> {
        const modulePath: string = this.getScrapingHandlerFileFolder();
        const modules: IHandler[] = await this.importModules(modulePath);
        return modules;
    }

    /**
     * スクレイピングハンドラのインスタンスを格納するディレクトリーを取得します
     * @returns {string} スクレイピングハンドラのインスタンスを格納するディレクトリー
     */
    private getScrapingHandlerFileFolder(): string {
        const scrapingSite = process.env.SCRAIPING_SITE ?? '';
        const currentFileDir = path.dirname(__filename);
        const scrapingHandlerDir = path.join(currentFileDir, scrapingSite);

        return scrapingHandlerDir;
    }

    /**
     * スクレイピングハンドラのインスタンスをimportします
     * @param modulePath スクレイピングハンドラのインスタンスを格納するディレクトリー
     * @returns {Promise<IHandler[]>} スクレイピングハンドラのインスタンス
     */
    private async importModules(modulePath: string): Promise<IHandler[]> {
        let modules: ScrapingHandlerAbstract[] = [];
        const files = fs.readdirSync(modulePath);
        for (const file of files) {
            if (this.isImportModuleFilter(file) == false) {
                continue;
            }
            const module = await this.importModule(path.join(modulePath, file));
            modules.push(...module);
        }

        const ret: IHandler[] = this.sortHandlerFilter(modules);
        return ret;
    }

    /**
     * スクレイピングハンドラのインスタンスをPriority順にsortします
     * @param modules スクレイピングハンドラのインスタンス
     * @returns Priority順にsortされたスクレイピングハンドラのインスタンス
     */
    private sortHandlerFilter(modules: ScrapingHandlerAbstract[]): ScrapingHandlerAbstract[] {
        const sortedModules = modules.sort((v1, v2) => v1.getPriority() - v2.getPriority());
        return sortedModules
    }

    /**
     * スクレイピングハンドラのインスタンスをimportするかどうかを判定します
     * @param fileName スクレイピングハンドラのインスタンスを格納するファイル名
     * @returns  true: スクレイピングハンドラのインスタンスをimportする / false: スクレイピングハンドラのインスタンスをimportしない
     */
    private isImportModuleFilter(fileName: string): boolean {
        if (fileName.endsWith('.js') == false) {
            return false;
        }
        return true;
    }

    /**
     * スクレイピングハンドラのインスタンスをimportします
     * @param modulePath スクレイピングハンドラのインスタンスを格納するファイル
     * @returns スクレイピングハンドラのインスタンス
     */
    private async importModule(modulePath: string): Promise<ScrapingHandlerAbstract[]> {
        const modules: ScrapingHandlerAbstract[] = [];

        try {
            const { default: Module } = await import(modulePath);
            const instance = new Module();
            modules.push(instance);
        } catch (error) {
            logger.error(`Failed to import module at ${modulePath}`, { error });
        }

        return modules;
    }


}

export default LoadScrapingHandler;