import State from "./state";
import Scared from "./scared";
import Hungry from "./hungry";
import {Tick} from "./types";

import { MaybeState, Update } from "./types";


export default class Content extends State {
  hunger_clock: number
  constructor() {
    super("Idle");
    this.hunger_clock = 10;
  }

  update(event: Update): MaybeState{
    super.update(event);
    switch(event.kind){
      case "kick":
        return new Scared();
      case "tick":
        this.hunger_clock -= (event as Tick).dt;
        if(this.hunger_clock <= 0) {
          return new Hungry();
        }
        break;
    }
    return undefined;
  }
}
