import {Game} from './Game';

export class EggballGame extends Game {
  constructor(redTeamPlayers: string[], blueTeamPlayers: string[]) {
    super();
    this.redTeamPlayers = redTeamPlayers;
    this.blueTeamPlayers = blueTeamPlayers;
    this.map = 'Eggball';
    this.playersPerTeam = 6;
  }
}
