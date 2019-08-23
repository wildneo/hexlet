import AlarmState from './AlarmState';
import ClockState from './ClockState';

export default class AlarmClock {
  constructor() {
    this.H = 12;
    this.M = 0;
    this.aH = 6;
    this.aM = 0;
    this.alarm = false;
    this.setState(ClockState);
  }

  setState(State) {
    this.state = new State(this);
  }

  clickMode() {
    switch (this.getCurrentMode()) {
      case 'alarm':
        this.setState(ClockState);
        break;
      case 'bell':
        this.setState(ClockState);
        break;
      default:
        this.setState(AlarmState);
        break;
    }
  }

  longClickMode() {
    switch (this.isAlarmOn()) {
      case true:
        this.alarm = false;
        break;
      default:
        this.alarm = true;
        break;
    }
  }

  clickH() {
    this.state.clickH();
  }

  clickM() {
    this.state.clickM();
  }

  tick() {
    this.state.tick();
  }

  isAlarmOn() {
    return this.alarm;
  }

  isAlarmTime() {
    if (this.hours() === this.alarmHours()
      && this.minutes() === this.alarmMinutes()) {
      return true;
    }
    return false;
  }

  minutes() {
    return this.M;
  }

  hours() {
    return this.H;
  }

  alarmMinutes() {
    return this.aM;
  }

  alarmHours() {
    return this.aH;
  }

  getCurrentMode() {
    return this.state.getType();
  }
}
