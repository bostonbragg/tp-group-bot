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
  ).replace('%inParen', '%onType%, function() {%functionText%}');
  public static REMOVE_ALL_LISTENERS_STRING = this.SOCKET_STRING.replace(
    '%socketCommand%',
    'removeAllEventListeners'
  ).replace('%inParen%', '');
  public static SETTING_STRING = this.EMIT_STRING.replace(
    '%emitType%',
    'setting'
  ).replace('%emitProp%', '{"name": "%settingName%", value: "%settingValue%"}');
}
