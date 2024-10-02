import State from "./state"

export type MaybeState = ChangeState | KeepState;
export type ChangeState = State;
export type KeepState = undefined;


export interface Update {
  dt: number,
  message?: string,
}
