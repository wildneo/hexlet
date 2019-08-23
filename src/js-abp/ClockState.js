import State from './State';
// eslint-disable-next-line import/no-cycle
import BellState from './BellState';

export default class ClockState extends State {
  constructor(clock) {
    super('clock', clock);
  }

  clickH() {
    this.hoursInc();
  }

  clickM() {
    this.minutesInc();
  }

  tick() {
    super.tick();
    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(BellState);
    }
  }
}
