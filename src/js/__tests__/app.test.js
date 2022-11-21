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
