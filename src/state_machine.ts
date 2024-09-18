import Idle from "./states/idle";
import { Update, StateChange } from "./states/types"
import State from "./states/state";


class StateMachine {
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

function state_main() {
  let state = new Idle();
  let sm = new StateMachine(state);
  for(let i=0; i<100; i++) {
    ;
    if(i%10 == 0) {
      sm.update({ dt:0.25, message:"Hey, ten." });
    }
    sm.update({dt:0.25});
  }
}

state_main();
