import getRoute from './getRouteConfigFromConfigFile';
import { join } from 'path';

const root = join(__dirname, 'fixtures', 'fromConfigFile');

describe('getRouteConfigFromConfigFile', () => {
  it('normal', () => {
    const result = getRoute(join(root, 'a.json'));
    expect(result).toEqual(['a']);
  });

  it('throw error if not Array', () => {
    expect(() => {
      getRoute(join(root, 'b.json'));
    }).toThrowError(/routes config must be Array/);
  });
});
