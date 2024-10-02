import { Update, MaybeState } from "./types";

/// This is the base class for all of the state classes. It holds the name 
// of the class for each one. It's also the generic type we use to represent
// "anything that works like a state". You'll have to implement the internal
// stuff for each of the subclasses (Scared, Hungry, Dead, Content, HungryScared).

export default class State {
  // This is the name of the class, which is used when we print out the state
  // changes. Your constructors need to pass in the name to this class using code
  // like this:
  //
  // super("Content") 
  //
  // inside the constructor. Use the actual class name instead of "Content" of course.
  name: string

  // The constructor sets up the stuff inside a new instance of its class. In this case,
  // it sets the name member to be whatever was passed in when it was called. You can call
  // the constructor of a parent class from a child class constructor with the super() function.
  constructor(name: string){
    this.name = name;
  }

  // Update is where all of the state changing happens. The catworld simulator will send you
  // events, and you will look at what's in them to decide how to react. You'll be changing
  // states sometimes, and keeping track of time other times. In order to change states, you should
  // return a new state from this function!
  update(event: Update): MaybeState {
    console.log(`State=${this.name}.update(${JSON.stringify(event)})`);
    return this;
  }


  // This function will get called by the state machine whenever a new state is entered. If you need
  // to do something only one time when the state is starting up, do it in your class's enter function.
  // Otherwise, you don't need to have this function in your class.
  enter(): void{
    console.log(`Entering the ${this.name} State`)
  }

  // This function will get called by the state machine whenever a new state is exited. If you need
  // to do something only one time when the state is shutting down, do it in your class's leave function.
  // Otherwise, you don't need to have this function in your class.
  leave(): void{
    console.log(`Leaving the ${this.name} State`)
  }
}
