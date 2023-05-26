export {};
import {Group} from '../groups/Group';
import {GameSetup} from '../helpers/GameSetup';
import {EggballGame} from '../objects/EggballGame';
import {Driver} from '../selenium/Driver';
import {Socket} from '../sockets/Socket';

export async function run() {
  const redTeamPlayers = ['red1', 'red2', 'red3', 'red4', 'red5', 'red6'];
  const blueTeamPlayers = [
    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'blue5',
    'blue6',
  ];

  const eggballGame = new EggballGame(redTeamPlayers, blueTeamPlayers);
  const groupLink = await Group.initializeGroup();
  eggballGame.setGroupLink(groupLink);
  console.log('Group created at: ' + groupLink);

  const driver = new Driver();
  await driver.initDriver(groupLink);

  const socket = new Socket(driver);
  // await socket.chat('This is a test');
  // await socket.checkThatSocketIsReady();
  // await socket.setPublicGroup(false);
  // await socket.setPrivatePublicGames(true);
  // await socket.setGameMode('eggball');
  // await socket.setMercyRule(10);
  // await socket.setServerSelect(true);
  // await socket.setServer('040f9334d182');
  // await socket.setEggLosingTeamStarts(false);
  // await socket.setTime(8);
  // await socket.setOvertime(false);
  await socket.setupEggballGame(eggballGame);

  eggballGame.inputScore(1, 1);
}

(async function () {
  await run();
})();
