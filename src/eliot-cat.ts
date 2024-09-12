import {CatInterface} from './catinator';

export class Cat implements CatInterface {
  hp: number = 20;
  hunger_time: number = 0;
  constructor() {
    this.hunger_time = 10;
  }
  meow() {
    if (this.hp > 0) {
      console.log("am hunger");
    }
  }
  event(message:string) {
    if (message == "food"){
      this.food();
    }
    if (message == "kick"){
      this.kick(10);

    }
    if (message == "scritch"){
      this.scritch(4);
    }

    console.log("Message ",message);
  }
  update(dt: number) {
    this.hunger_time -= dt;
    if (this.hunger_time <= 0){
      this.meow();
    }
  }
  hungry() {
    console.log("I'm hungry! Meow");
  }
  kick(n: number) {
    this.hp -= n;

    if (this.hp <= 0) {
      console.log("The cat is dead");
    }
  }
  scritch(n: number) {
    if (this.hp <= 0) {
      console.log("THE CAT IS DEAD! STOP PETTING THE CORPSE!");
      this.hp = 0;
      return;
    }
    if (n <= 5) {
      this.hp += n;
    } else {
      console.log("You need to insert a number <=5");
    }

    if (this.hp > 20) {
      this.hp = 20;
    }
  }
  food() {
    if (this.hp > 0) {
      this.hunger_time = 10;
    }
  }
}
