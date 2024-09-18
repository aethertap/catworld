import {test,expect} from "@jest/globals";
import StateMachine from '../src/state_machine';
import Idle from '../src/states/idle';
import Fleeing from '../src/states/fleeing';


test("Can a test be run?", () => {
  let sm = new StateMachine(new Idle());

  expect(sm.active_state.name).toBe("Idle");
  sm.update({
    dt:0,
    message: "asdfasdf"
  });
  expect(sm.active_state.name).toBe("Fleeing")
})
