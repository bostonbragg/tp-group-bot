import {Game} from './Game';

export class TagProGame extends Game {
  TagProGame(redTeamPlayers: string[], blueTeamPlayers: string[], map: string) {
    this.redTeamPlayers = redTeamPlayers;
    this.blueTeamPlayers = blueTeamPlayers;
    this.map = map;
    this.playersPerTeam = 4;
  }
}
