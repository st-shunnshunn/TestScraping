
interface IWebDriver {
  transitionPage(url: string): Promise<boolean>;
  searchContent(selector: string, fn: Function): Promise<string>;
  clickElement(selector: string): Promise<boolean>;
  actionElement(selector: string, fn: Function): Promise<boolean>;
  waitViewElement(selector: string, time: number): Promise<void>;
}
export { IWebDriver };