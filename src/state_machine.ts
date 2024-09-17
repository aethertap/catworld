
type StateChange = State | undefined;


interface Update {
  dt: number,
  message?: string,
}

class State {
  name: string
  constructor(name: string){
    this.name = name;
  }
  update(event: Update): StateChange {
    console.log(`State=${this.name}.update(${JSON.stringify(event)})`);
    return this;
  }

  enter(): void{
    console.log(`Entering the ${this.name} State`)
  }
  leave(): void{
    console.log(`Leaving the ${this.name} State`)
  }
}

class Idle extends State {
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

class Fleeing extends State {
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
