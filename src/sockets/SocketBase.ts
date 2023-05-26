import {Driver} from '../selenium/Driver';
import {StringConstants} from './StringConstants';

export class SocketBase {
  driver: Driver;

  constructor(driver: Driver) {
    this.driver = driver;
  }

  async removeAllEventListeners(): Promise<void> {
    await this.executeScript(StringConstants.REMOVE_ALL_LISTENERS_STRING);
    await this.driver.refresh();
  }

  emit(type: string, properties: string): string {
    return StringConstants.EMIT_STRING.replace('%emitType%', type).replace(
      '%emitProp%',
      properties
    );
  }

  emitNoProps(type: string): string {
    return StringConstants.EMIT_NO_PROPS_STRING.replace('%emitType%', type);
  }

  on(type: string, functionText: string, funcParam: string): string {
    return StringConstants.ON_STRING.replace('%onType%', type)
      .replace('%functionText%', functionText)
      .replace('%funcParam%', funcParam);
  }

  addEventListener(
    type: string,
    functionText: string,
    funcParam: string
  ): string {
    return StringConstants.ADD_EVENT_LISTENER_STRING.replace(
      '%functionText%',
      functionText
    ).replace('%funcParam%', funcParam);
  }

  changeSetting(name: string, value: string): string {
    return StringConstants.SETTING_STRING.replace(
      '%settingName%',
      name
    ).replace('%settingValue%', value);
  }

  forceMovePlayer(name: string, team: number): string {
    return StringConstants.MOVE_PLAYER_TO_TEAM_STRING.replace(
      '%playerName%',
      name
    ).replace('%teamNum%', `${team}`);
  }

  async executeScript(script: string): Promise<void> {
    console.log('Preparing to execute script: ' + script);
    await this.driver.executeCommand(script);
  }
}
