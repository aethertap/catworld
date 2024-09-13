import * as res from './result';
import * as readline from 'readline';
import * as bcat from './briana-cat';
import * as ecat from './eliot-cat';

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
      prompt: 'OHAI> ',
    });

    rl.prompt();

    rl.on('line', (line) => {
      let lin = line.trim();
      for(let cat of this.sack) {
        cat.event(lin);
      }
      rl.prompt();
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
      })
  }

  async loop() {
    let last_time = Date.now();
    this.last_update_time = Date.now();
    let self=this;
    this.get_input();
    await setInterval(()=>self.update_cats(),0.10);
  }

  update_cats() {
    let now = Date.now();
    let dt = (now-this.last_update_time)/1000.0;
    if(dt > 0.1) {
      //console.log("dt = ",dt);
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


