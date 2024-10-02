import State from "./state"

export type MaybeState = ChangeState | KeepState;
export type ChangeState = State;
export type KeepState = undefined;


export class Update {
  kind: string
  constructor(kind:string) {
    this.kind = kind
  }
}

export class Tick extends Update {
  dt: number
  constructor(dt:number) {
    super("tick");
    this.dt = dt;
  }
}

export class Kick extends Update {
  constructor() {
    super("kick");
  }
}

export class Feed extends Update {
  constructor() {
    super("feed");
  }
}

export class Scritch extends Update {
  constructor() {
    super("scritch");
  }
}


