
import State from "./state";

import { MaybeState, Update } from "./types";


export default class HungryScared extends State {
  constructor() {
    super("Idle");
  }

  update(event: Update): MaybeState{
    super.update(event);

    return undefined;
  }
}
