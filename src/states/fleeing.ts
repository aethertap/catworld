import State from "./state";
import { StateChange, Update } from "./types";
import Idle from "./idle";

export default class Fleeing extends State {
  flee_time:number
  constructor() {
    super("Fleeing");
    this.flee_time=4;
  }

  update(event:Update): StateChange {
    this.flee_time -= event.dt;
    console.log(`I will run for ${this.flee_time} more seconds...`);
    if(this.flee_time <= 0) {
      let state = new Idle();
      return state;
    } else {
      return undefined;
    }
  }

  enter(): void {
    console.log(`Entering ${this.name}`);
  }

  leave(): void {
    console.log(`Leaving ${this.name}`);
  }
}
