export default class Settings {
  constructor(userSettings) {
    const data = Object.entries(userSettings);
    this.userSettings = new Map(data);
  }

  static defaults() {
    return new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  set(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    return new Map([...Settings.defaults(), ...this.userSettings]);
  }
}

export const appSettings = new Settings({
  theme: 'gray',
  music: 'rock',
});
