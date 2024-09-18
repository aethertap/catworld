import State from "./state"

export type StateChange = State | undefined;

export interface Update {
  dt: number,
  message?: string,
}
