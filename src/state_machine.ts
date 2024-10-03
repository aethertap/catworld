import { Update, MaybeState } from "./states/types"
import State from "./states/state";


export default class StateMachine {
  active_state: State
  constructor(initial_state: State){
    this.active_state = initial_state;
  }

  update(event:Update): void {
    //console.log(`StateMachine.update(${event})`);
    let new_state = this.active_state.update(event);
    if(new_state !== undefined) {
      this.active_state.leave();
      this.active_state = new_state;
      this.active_state.enter();
    }
  }
}


