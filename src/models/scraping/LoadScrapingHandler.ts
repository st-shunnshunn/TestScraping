import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { IHandler } from './IHandler';
import { ScrapingHandlerAbstract } from './ScrapingHandlerAbstract';
import logger from '../../utils/Logger';

dotenv.config();

class LoadScrapingHandler {

    async load(): Promise<IHandler[]> {
        const modulePath: string = this.getScrapingHandlerFileFolder();
        const modules: IHandler[] = await this.importModules(modulePath);
        return modules;
    }

    private getScrapingHandlerFileFolder(): string {
        const site = process.env.SCRAIPING_SITE ?? '';
        const parentPath = path.dirname(__filename);
        const modulePath = path.join(parentPath, site);
        return modulePath;
    }

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

    private sortHandlerFilter(modules: ScrapingHandlerAbstract[]): ScrapingHandlerAbstract[] {
        const sortedModules = modules.sort((v1, v2) => v1.getPriority() - v2.getPriority());
        return sortedModules
    }

    private isImportModuleFilter(fileName: string): boolean {
        if (fileName.endsWith('.js') == false) {
            return false;
        }
        return true;
    }

    private async importModule(filePath: string): Promise<ScrapingHandlerAbstract[]> {
        let ret: ScrapingHandlerAbstract[] = [];

        try {
            const module = await import(filePath);
            const instance: ScrapingHandlerAbstract = new module.default();
            ret.push(instance);
        } catch (e) {
            logger.error(e);
        }
        return ret
    }

}

export default LoadScrapingHandler;