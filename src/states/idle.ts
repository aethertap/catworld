import State from "./state";
import Fleeing from "./fleeing";

import { StateChange, Update } from "./types";


export default class Idle extends State {
  constructor() {
    super("Idle");
  }

  update(event: Update): StateChange {
    super.update(event);
    if(event.message) {
      console.log(`AAAAHHHHHHHHOOOOOO scareeeyyy: You said ${event.message}`)
      return new Fleeing();
    } else {
      return undefined;
    }
  }
  enter(): void {
    super.enter()
  }

  leave(): void {
    super.leave()
  }
}
