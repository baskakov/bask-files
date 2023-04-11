import { ls, cat } from '../index';

test('ls', async () => {
    const result1 = await ls('./');
    const result2 = await ls('./test');

    expect(result1.length).toBeGreaterThan(0);
    expect(result2.length).toEqual(0);
});

test('cat', async () => {
    const result1 = await cat('./README.md');
    const result2 = await cat('./test.ts');

    expect(result1).not.toEqual('');
    expect(result2).toEqual('');
});
