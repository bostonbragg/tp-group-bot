import {Builder, Browser, WebDriver} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/chrome';

export class Driver {
  private driver: WebDriver;

  constructor(existingDriver?: WebDriver) {
    if (existingDriver) {
      this.driver = existingDriver;
    }
  }

  async initDriver(groupLink: string): Promise<Driver> {
    const options = new Options();
    options.addArguments('ignore-certificate-errors', 'ignore-ssl-errors');
    options.excludeSwitches('enable-logging');
    this.driver = new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(options)
      .build();
    await this.goToGroup(groupLink);
    return this;
  }

  async teardownDriver(): Promise<void> {
    await this.driver.close();
    await this.driver.quit();
  }

  private async goToGroup(groupLink: string): Promise<void> {
    await this.driver.get(groupLink);
  }

  async executeCommand(command: string): Promise<void> {
    await this.driver.executeScript(command);
  }

  async refresh(): Promise<void> {
    await this.driver.navigate().refresh();
  }
}
