import State from './State';
// eslint-disable-next-line import/no-cycle
import ClockState from './ClockState';

export default class BellState extends State {
  constructor(clock) {
    super('bell', clock);
  }

  tick() {
    super.tick();
    this.clock.setState(ClockState);
  }
}
