
export type Result<T> = (Ok<T> | Err) & Matchable<T>;

export interface Matchable<T> {
  match<Out>(fns: {ok:(t:T)=>Out,err:()=>Out}): Out ;
}

export interface Ok<T> extends Matchable<T> {
  tag: "ok"
  value: T
}

export interface Err extends Matchable<never> {
  tag: "err"
  msg: string
}

export namespace Result {
  class Ok<T> implements Ok<T> {
    public tag: "ok" = "ok"
    public value: T

    public constructor(val:T) {
      this.value = val;
    }

    public toString():string {
      return `Some(${this.value})`;
    }

    public match<O>(fns:{ok:(v:T)=>O, err:()=>O}):O {
      return fns.ok(this.value)
    }
  }

  class Err implements Err{
    public tag: "err" = "err"
    public msg: string

    public constructor(msg:string) {
      this.msg = msg;
    }

    public toString():string {
      return `Err(${this.msg})`;
    }

    public match<T,Out>(fns:{ok:(v:T)=>Out, err:()=>Out}):Out {
      return fns.err();
    }
  }

  export function ok<T>(value:T):Ok<T> {
    return new Ok(value)
  }
  
  export function err(msg:string):Err {
    return new Err(msg)
  }
}


