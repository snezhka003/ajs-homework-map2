export default class Settings {
  constructor(...rest) {
    this.userSettings = new Map();
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    const allSettings = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    rest.forEach((setting) => {
      for (const item in setting) {
        if (Object.prototype.hasOwnProperty.call(allSettings, item)) {
          this.userSettings.set(item, setting[item]);
        }
      }
    });
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

export const appSettings = new Settings({
  theme: 'gray',
  music: 'rock',
});
