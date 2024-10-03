import {test,expect} from "@jest/globals";
import StateMachine from '../src/state_machine';
import Content from '../src/states/content';
import Scared from '../src/states/scared';
import Hungry from '../src/states/hungry';
import { Tick, Kick } from "../src/states/types";


test("Can a test be run?", () => {
  let sm = new StateMachine(new Content());

  expect(sm.active_state.name).toBe("Content");
  sm.update(new Tick(9.99))
  expect(sm.active_state.name).toBe("Content");
  sm.update(new Tick(0.011));
  expect(sm.active_state).toBeInstanceOf(Hungry);
  expect(sm.active_state.name).toBe("Hungry");
})

test("Can I kick the cat?", () => {
  let sm = new StateMachine(new Content());
  expect(sm.active_state.name).toBe("Content");
  sm.update(new Kick());
  expect(sm.active_state).toBeInstanceOf(Scared);
  expect(sm.active_state.name).toBe("Scared");
})
