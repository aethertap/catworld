import * as readline from 'readline';
import * as bcat from './cat1';
import * as ecat from './cat2';
import {MaybeUpdate,Kick,Feed,Scritch} from './states/types';

export interface CatInterface {
  event(message:string):void;
  update(dt:number):void;
}

class Catinator {
  sack: CatInterface[]
  last_update_time:number
  
  constructor(sack:CatInterface[]) {
    this.sack = sack;
    this.last_update_time = Date.now();
  }

  async get_input() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'slay the riz, dude bro> ',
    });

    rl.prompt();

    rl.on('line', (line) => {
      let lin = line.trim();
      let event:MaybeUpdate = undefined;

      switch(lin){
        case 'kick':
          event = new Kick();
          break;
        case 'feed':
          event = new Feed();
          break;
        case 'scritch':
          event = new Scritch();
          break;
        default:
          console.log("Say WUT? Try again, hooman. You are allowed to: kick, feed, scritch. But kick is lame.");
      }
      if(event) {
        for(let cat of this.sack) {
          cat.event(lin);
        }
      }
      rl.prompt();
    }).on('close', () => {
        console.log('I did not give you permission to leave. Continue to feed and scritch, hooman.');
        process.exit(0);
      })
  }

  async loop() {
    this.last_update_time = Date.now();
    let self=this;
    this.get_input();
    setInterval(()=>self.update_cats(),0.10);
  }

  update_cats() {
    let now = Date.now();
    let dt = (now-this.last_update_time)/1000.0;
    if(dt > 0.1) {
      for(let cat of this.sack) {
        cat.update(dt);
      }
      this.last_update_time = now;
    }
  }
}


function main() {
  let ci = new Catinator([new bcat.Kitten, new ecat.Cat]);
  ci.loop();
}

main();


