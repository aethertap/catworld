class Kitten {
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
    console.log("Mrow, I am hungry Meowster");
  }
  //When it's been pet
  skritch() {
    if (this.currentHP + 20 <= this.maxHP) {
      this.currentHP += 20;
    } else {
      this.currentHP = this.maxHP;
    }
    console.log("*Cheerful Purring* (hp=" + this.currentHP + ")");
  }
  // Poor kitty!
  kick() {
    this.currentHP -= this.kickDmg;
    console.log("*Hisses* (hp=" + this.currentHP + ")");
  }
  // IDU... (I Don't Understand)
  dontKnow() {
    console.log("That means nothing. I require food, and skritches. *Meows*");
  }

  update(dt: number) {
    this.hungerTime -= dt;
    if (this.hungerTime <= 0) {
      this.meow();
    }
  }
  event(input: string) {
    if (input.toLowerCase() == "skritch" || "scritch") {
      this.skritch();
    }
    if (input.toLowerCase() == "kick") {
      this.kick();
    } else {
      this.dontKnow();
    }
  }
}
