import Daemon from '../daemon';
import Magician from '../magician';

test('Magician attack without distance and stoned', () => {
  const expected = 100;
  const magician = new Magician('Merlin');
  magician.distance = 1;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('Magician attack with distance and stoned', () => {
  const expected = 72;
  const magician = new Magician('Merlin');
  magician.distance = 3;
  magician.stoned = true;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('Daemon attack with distance and without stoned', () => {
  const expected = 60;
  const daemon = new Daemon('Aid');
  daemon.distance = 5;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('Daemon attack without distance and with stoned', () => {
  const expected = 60;
  const daemon = new Daemon('Aid');
  daemon.distance = 4;
  daemon.stoned = true;
  const received = daemon.attack;
  expect(received).toBe(expected);
});
