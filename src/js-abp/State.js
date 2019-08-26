export default class State {
  constructor(clock, modeName, nextState) {
    this.clock = clock;
    this.modeName = modeName;
    this.nextStateClass = nextState;
  }

  getMode() {
    return this.modeName;
  }

  nextState(nextState) {
    this.clock.setState(nextState || this.nextStateClass);
  }

  incrementH() {
    this.clock.incrementH(this.timeType);
  }

  incrementM() {
    this.clock.incrementM(this.timeType);
  }
}
