import wait from '../async_code_timer';

test('wait', () => {
  const before = new Date();
  const startTime = before.getTime();
  const duration = 150;
  return wait(duration).then(() => {
    const after = new Date();
    const endTime = after.getTime();
    const difference = endTime - startTime;
    expect(difference).toBeGreaterThanOrEqual(duration);
    expect(difference).toBeLessThan(duration + 30);
  });
});