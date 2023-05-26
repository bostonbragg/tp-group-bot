import {Socket} from '../sockets/Socket';
import {Game} from '../objects/Game';

export class GameSetup {
  private socket: Socket;

  constructor(game: Game, socket: Socket) {
    this.socket = socket;
  }

  async setupGame(): Promise<void> {
    await this.socket.setPublicGroup(false);
    await this.socket.setPrivatePublicGames(true);
    await this.socket.setGameMode('eggball');
    await this.socket.setMercyRule(10);
    await this.socket.setServerSelect(true);
    await this.socket.setServer('040f9334d182');
    await this.socket.setEggLosingTeamStarts(false);
    await this.socket.setTime(8);
    await this.socket.setOvertime(false);
  }

  // private async setSettings(): Promise<void> {
  //   await this.socket.
  // }

  // private async enforcePlayerTeams(): Promise<void> {

  // }
}
