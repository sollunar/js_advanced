"use-strict";

class Character {
  #name;
  #race;
  #lang;
  constructor(name, race, lang) {
    this.#name = name;
    this.#race = race;
    this.#lang = lang;
  }

  speak() {
    console.log(`${this.#name} is my name. I speak ${this.#lang}.`);
  }
}

class Weapon {
  constructor(weapon) {
    this.weapon = weapon;
  }
  weaponType() {
    console.log(`I am armed with a ${this.weapon}`);
  }
  attack() {
    console.log(`Attacking with ${this.weapon}`);
  }
}

class Sword extends Weapon {
  constructor() {
    super("sword");
  }

  attack() {
    console.log(`===Swinging sword at the target===`);
  }
}

class Bow extends Weapon {
  constructor() {
    super("bow");
  }

  attack() {
    console.log(`===Shooting an arrow at the target===`);
  }
}

class Spell {
  constructor(spell) {
    this.spell = spell;
  }

  currentSpell() {
    console.log(`I can cast a ${this.spell}`);
  }

  cast() {
    console.log(`Casting the ${this.spell}`);
  }
}

class MagicBarrier extends Spell {
  constructor() {
    super("magic barier");
  }

  cast() {
    console.log(`***A bubble barrier shield you from any harm ***`);
  }
}

class Orc extends Character {
  constructor(name, weapon) {
    super(name, "orc", "black speech");
    this.weapon = weapon;
  }

  speak() {
    console.log(
      `===Mirdautas vras! I am ${this.name}. I speak ${this.lang}.===`
    );
  }
}

class Elf extends Character {
  constructor(name, spell) {
    super(name, "elf", "sindarin");
    this.spell = spell;
  }

  speak() {
    console.log(
      `***Mae govannen! My name is ${this.name}. I speak ${this.lang}.`
    );
  }
}

class Human extends Character {
  constructor(name, weapon) {
    super(name, "human", "common tongue");
    this.weapon = weapon;
  }
}

const sword = new Sword();
const gothmog = new Orc("Gothmog", sword);
gothmog.speak();
gothmog.weapon.attack();

const magicbarrier = new MagicBarrier();
const arwen = new Elf("Arwen", magicbarrier);
arwen.speak();
arwen.spell.currentSpell();
arwen.spell.cast();

const bow = new Bow();
const eomer = new Human("Eomer", bow);
eomer.speak();
eomer.weapon.weaponType();
eomer.weapon.attack();
