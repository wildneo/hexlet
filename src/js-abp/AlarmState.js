import State from './State';
// eslint-disable-next-line import/no-cycle
import ClockState from './ClockState';
// eslint-disable-next-line import/no-cycle
import BellState from './BellState';

export default class AlarmState extends State {
  constructor(clock) {
    super(clock, 'alarm', ClockState);
    this.timeType = 'alarmTime';
  }

  tick() {
    if (this.clock.isAlarmTime()) {
      this.nextState(BellState);
    }
  }

  clickH() {
    this.incrementH();
  }

  clickM() {
    this.incrementM();
  }
}
