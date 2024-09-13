import {CatInterface} from './catinator';

export class Kitten implements CatInterface {
  hungerTime: number = 0; //sec
  maxHP: number = 100;
  kickDmg: number = 10;
  currentHP: number = 100;

  constructor() {
    this.hungerTime = 10;
    this.currentHP = this.maxHP;
    this.kickDmg = 10;
  }

  //When it's hungry
  meow() {
    console.log("Mrow, I am a hungry Meownster");
  }

  //feeding kitty
  feed() {
    console.log("FOOD IS MY PAYMENT. I accept. *Meow*");
    this.hungerTime = 20;
  }

  //When it's been pet
  skritch() {
    if (this.currentHP + 20 <= this.maxHP) {
      this.currentHP += 20;
    } else {
      this.currentHP = this.maxHP;
    }
    console.log("*Begrudging Purring* (hp=" + this.currentHP + ")");
  }
  // Poor kitty!
  kick() {
    this.currentHP -= this.kickDmg;
    console.log("*Hisses* (hp=" + this.currentHP + ")");
  }
  // IDU... (I Don't Understand)
  dontKnow() {
    console.log("*Confused Meow*");
  }

  update(dt: number) {
    this.hungerTime -= dt;
    if (this.hungerTime <= 0 && this.currentHP !>=0) {
      this.meow();
    }
  }
  event(input: string) {
    if (input.toLowerCase() == "skritch" || input.toLowerCase() == "scritch") {
      this.skritch();
    }
    if (input.toLowerCase() == "feed" || input.toLowerCase() == "food") {
      this.feed();
    }
    if (input.toLowerCase() == "kick") {
      if (this.currentHP <= 0) {
        console.log("YOU KILLED ME! Killer T_T")
        return
      }
      this.kick();
    }
  }
}
