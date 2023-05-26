import {Socket} from '../sockets/Socket';
import {Game} from '../objects/Game';

export class GameSetup {
  private socket: Socket;
  private game: Game;

  constructor(game: Game, socket: Socket) {
    this.socket = socket;
    this.game = game;
  }

  async setupGame(): Promise<void> {
    await this.setSettings();
    await this.enforcePlayerTeams();
  }

  private async setSettings(): Promise<void> {
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

  private async enforcePlayerTeams(): Promise<void> {
    this.game.redTeamPlayers.forEach(async value => {
      await this.socket.forcePlayerOnTeam(value, 1);
    });
    this.game.blueTeamPlayers.forEach(async value => {
      await this.socket.forcePlayerOnTeam(value, 2);
    });
  }
}
