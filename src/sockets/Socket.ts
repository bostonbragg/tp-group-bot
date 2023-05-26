import {Driver} from '../selenium/Driver';
import {Game} from '../objects/Game';
import {GameSetup} from '../helpers/GameSetup';
import {SocketBase} from './SocketBase';

export class Socket {
  private driver: Driver;
  private socketBase: SocketBase;
  private exe: (script: string) => Promise<void>;
  private cs: (name: string, value: string) => string;

  constructor(driver: Driver) {
    this.driver = driver;
    this.socketBase = new SocketBase(driver);
    this.exe = this.socketBase.executeScript;
    this.cs = this.socketBase.changeSetting;
  }

  async setupEggballGame(game: Game) {
    await new GameSetup(game, this).setupGame();
  }

  async checkThatSocketIsReady(): Promise<void> {
    await this.exe(
      'let isReady = typeof tagpro !== "undefined"; while(!isReady){console.log("Socket not ready, trying again"); isReady = typeof tagpro !== "undefined";}'
    );
  }

  async chat(message: string): Promise<void> {
    await this.exe(this.socketBase.emit('chat', `"${message}"`));
  }

  async setPublicGroup(setToPublic: boolean) {
    await this.exe(this.cs('discoverable', `${setToPublic}`));
  }

  async setPrivatePublicGames(setToPrivate: boolean) {
    const event = setToPrivate ? 'pug' : 'pub';
    await this.exe(this.socketBase.emitNoProps(event));
  }

  async setGameMode(gameMode: string) {
    await this.exe(this.cs('mode', gameMode));
  }

  async setMercyRule(amount: number) {
    await this.exe(this.cs('mercyRule', `${amount}`));
  }

  async setServerSelect(setTo: boolean) {
    await this.exe(this.cs('serverSelect', `${setTo}`));
  }

  async setServer(server: string) {
    await this.exe(this.cs('server', server));
  }

  async setEggLosingTeamStarts(value: boolean) {
    await this.exe(this.cs('eggballLosingTeamStarts', `${value}`));
  }

  async setTime(time: number) {
    await this.exe(this.cs('time', `${time}`));
  }

  async setOvertime(value: boolean) {
    await this.exe(this.cs('overtime', `${value}`));
  }
}
