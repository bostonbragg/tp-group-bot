export class Game {
  redTeamPlayers: string[];
  blueTeamPlayers: string[];
  map: string;
  playersPerTeam: number;
  groupLink: string;
  private redTeamScore: number;
  private blueTeamScore: number;

  inputScore(redTeamScore: number, blueTeamScore: number): void {
    this.redTeamScore = redTeamScore;
    this.blueTeamScore = blueTeamScore;
  }

  setGroupLink(groupLink: string) {
    this.groupLink = groupLink;
  }

  getGroupLink(): string {
    return this.groupLink;
  }

  getRedTeamScore(): number {
    return this.redTeamScore;
  }

  setRedTeamScore(value: number) {
    this.redTeamScore = value;
  }

  getBlueTeamScore(): number {
    return this.blueTeamScore;
  }
  setBlueTeamScore(value: number) {
    this.blueTeamScore = value;
  }
}
