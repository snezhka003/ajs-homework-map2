import { appSettings } from '../app';

test('тест установки пользовательских настроек', () => {
  const received = Object.fromEntries(appSettings.settings.entries());
  const expected = {
    theme: 'gray',
    music: 'rock',
    difficulty: 'easy',
  };
  expect(received).toEqual(expected);
});

test('тест смены пользовательских настроек', () => {
  appSettings.set('theme', 'light');
  appSettings.set('music', 'chillout');
  appSettings.set('difficulty', 'hard');

  const received = Object.fromEntries(appSettings.settings.entries());
  const expected = {
    theme: 'light',
    music: 'chillout',
    difficulty: 'hard',
  };
  expect(received).toEqual(expected);
});
