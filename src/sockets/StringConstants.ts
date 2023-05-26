export class StringConstants {
  private static SOCKET_STRING =
    'tagpro.group.socket.%socketCommand%(%inParen%)';
  public static EMIT_STRING = this.SOCKET_STRING.replace(
    '%socketCommand%',
    'emit'
  ).replace('%inParen%', '"%emitType%", %emitProp%');
  public static EMIT_NO_PROPS_STRING = this.SOCKET_STRING.replace(
    '%socketCommand%',
    'emit'
  ).replace('%inParen%', '"%emitType%"');
  public static ON_STRING = this.SOCKET_STRING.replace(
    '%socketCommand%',
    'on'
  ).replace('%inParen%', '"%onType%", function(%funcParam%) {%functionText%}');
  public static ADD_EVENT_LISTENER_STRING = this.ON_STRING.replace(
    'on',
    'addEventListener'
  );
  public static REMOVE_ALL_LISTENERS_STRING = this.SOCKET_STRING.replace(
    '%socketCommand%',
    'removeAllEventListeners'
  ).replace('%inParen%', '');
  public static SETTING_STRING = this.EMIT_STRING.replace(
    '%emitType%',
    'setting'
  ).replace('%emitProp%', '{"name": "%settingName%", value: "%settingValue%"}');
  public static MPTTS_FUNC_STRING = `if(player.name === "%playerName%"){${this.EMIT_STRING.replace(
    '%emitType%',
    'team'
  ).replace('%emitProp%', '{"id": player.id, "team": %teamNum%}')}}`;
  public static MOVE_PLAYER_TO_TEAM_STRING =
    this.ADD_EVENT_LISTENER_STRING.replace('%onType%', 'member')
      .replace('%funcParam%', 'player')
      .replace('%functionText%', this.MPTTS_FUNC_STRING);
}
