import showHealth from '../health';

test.each([
  ['healthy', { name: 'Маг', health: 90 }],
  ['wounded', { name: 'Маг', health: 50 }],
  ['wounded', { name: 'Маг', health: 25 }],
  ['critical', { name: 'Маг', health: 15 }],
  ['critical', { name: 'Маг', health: 5 }],
])(
  ('should show the state of health for %o obj'),
  (level, obj) => {
    const result = showHealth(obj);
    expect(result).toBe(level);
  },
);
