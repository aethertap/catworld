import State from "./state";
import Scared from "./scared";
import Hungry from "./hungry";
import {Tick} from "./types";

import { MaybeState, Update } from "./types";


export default class Content extends State {
  constructor() {
    super("Idle");
  }

  update(event: Update): MaybeState{
    super.update(event);
    return undefined;
  }
}
