import { TestScheduler } from 'rxjs/testing';
import { throttleTime, map } from 'rxjs/operators';

describe('Marble Testing', () => {
  const scheduler = new TestScheduler(() => {});

  it('generate the stream correctly', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable, expectSubscriptions } = helpers;

      const e1 = cold('-a--b--c---|');
      const subs = '^----------!';
      const expected = '-a-----c---|';

      expectObservable(e1.pipe(throttleTime(3, scheduler))).toBe(expected);
      expectSubscriptions(e1.subscriptions).toBe(subs);
    });
  });

  describe('map operator', () => {
    const addDrama = function(x: number | string) {
      return x + '!';
    };

    it('should map multiple values', () => {
        scheduler.run(helpers => {
        const { cold, expectObservable, expectSubscriptions } = helpers;

        const a = cold('--1--2--3--|');
        const asubs = '^          !';
        const expected = '--x--y--z--|';

        const r = a.pipe(map(addDrama));

        expectObservable(r).toBe(expected, { x: '1!', y: '2!', z: '3!' });
        expectSubscriptions(a.subscriptions).toBe(asubs);
      });
    });
  });
});
