import State from './state_State';
// eslint-disable-next-line import/no-cycle
import AlarmState from './state_AlarmState';
// eslint-disable-next-line import/no-cycle
import BellState from './state_BellState';

export default class ClockState extends State {
  constructor(clock) {
    super(clock, 'clock', AlarmState);
    this.timeType = 'clockTime';
  }

  tick() {
    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
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
