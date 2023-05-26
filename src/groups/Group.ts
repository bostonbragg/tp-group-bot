export class Group {
  static async initializeGroup(): Promise<string> {
    const res = await fetch('https://tagpro.koalabeast.com/groups/create', {
      method: 'POST',
    });
    return res.url;
  }
}
