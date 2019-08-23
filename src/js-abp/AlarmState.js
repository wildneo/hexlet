import State from './State';
import BellState from './BellState';

export default class AlarmState extends State {
  constructor(clock) {
    super('alarm', clock);
  }

  clickH() {
    this.alarmHoursInc();
  }

  clickM() {
    this.alarmMinutesInc();
  }

  tick() {
    super.tick();
    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(BellState);
    }
  }
}
