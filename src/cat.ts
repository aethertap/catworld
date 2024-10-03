import StateMachine from './state_machine';
import {Update} from './states/types';
import Content from './states/content';


export default class Cat  {
  state_machine: StateMachine
  constructor() {
    this.state_machine = new StateMachine(new Content());
  }
  
  update(event: Update):void{
    this.state_machine.update(event);
  }
}


