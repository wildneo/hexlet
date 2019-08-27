import ClockState from './state_ClockState';

export default class AlarmClock {
  constructor() {
    this.clockTime = { hours: 12, minutes: 0 };
    this.alarmTime = { hours: 6, minutes: 0 };
    this.setState(ClockState);
    this.alarmOn = false;
  }

  setState(State) {
    this.state = new State(this);
  }

  clickMode() {
    this.state.nextState();
  }

  longClickMode() {
    this.alarmOn = !this.alarmOn;
  }

  clickH() {
    this.state.incrementH();
  }

  clickM() {
    this.state.incrementM();
  }

  tick() {
    this.incrementM('clockTime');
    if (this.minutes() === 0) {
      this.incrementH('clockTime');
    }
    this.state.tick();
  }

  isAlarmOn() {
    return this.alarmOn;
  }

  isAlarmTime() {
    return this.hours() === this.alarmHours()
      && this.minutes() === this.alarmMinutes();
  }

  minutes() {
    return this.clockTime.minutes;
  }

  hours() {
    return this.clockTime.hours;
  }

  alarmMinutes() {
    return this.alarmTime.minutes;
  }

  alarmHours() {
    return this.alarmTime.hours;
  }

  getCurrentMode() {
    return this.state.getMode();
  }

  incrementH(timeType) {
    const data = this[timeType];
    data.hours = (data.hours + 1) % 24;
  }

  incrementM(timeType) {
    const data = this[timeType];
    data.minutes = (data.minutes + 1) % 60;
  }
}
