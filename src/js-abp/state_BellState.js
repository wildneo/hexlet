import State from './state_State';
// eslint-disable-next-line import/no-cycle
import ClockState from './state_ClockState';

export default class BellState extends State {
  constructor(clock) {
    super(clock, 'bell', ClockState);
  }

  tick() {
    this.nextState();
  }

  // eslint-disable-next-line class-methods-use-this
  incrementH() {
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  incrementM() {
    return false;
  }
}
