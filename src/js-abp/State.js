export default class State {
  constructor(type, clock) {
    this.type = type;
    this.clock = clock;
  }

  getType() {
    return this.type;
  }

  hoursInc() {
    const n = this.clock.hours() + 1;
    this.clock.H = n === 24 ? 0 : n;
  }

  minutesInc() {
    const n = this.clock.minutes() + 1;
    this.clock.M = n === 60 ? 0 : n;
  }

  alarmHoursInc() {
    const n = this.clock.alarmHours() + 1;
    this.clock.aH = n === 24 ? 0 : n;
  }

  alarmMinutesInc() {
    const n = this.clock.alarmMinutes() + 1;
    this.clock.aM = n === 60 ? 0 : n;
  }

  tick() {
    this.minutesInc();
    if (this.clock.minutes() === 0) {
      this.hoursInc();
    }
  }

  clickH() {
    return;
  }

  clickM() {
    return;
  }
}
