import { Update, StateChange } from "./types";

export default class State {
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
