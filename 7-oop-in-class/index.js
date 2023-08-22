"use-strict";

class Character {
  #name;
  #race;
  #lang;
  constructor(name, race) {
    this.#name = name;
    this.#race = race;
    this.#setLanguage();
  }

  #setLanguage() {
    switch (this.#race) {
      case "orc":
        this.#lang = "black speech";
        break;
      case "elf":
        this.#lang = "sinadrin";
        break;
      default:
        this.#lang = "common";
        break;
    }
  }

  speak() {
    console.log(`${this.#name} is my name. I speak ${this.#lang}.`);
  }
}

const spellBook = {
  magicBarrier: "magic barrier",
  summontWaterSpirit: "summon water spirit",
};

const weaponArsenal = {
  sword: "sword",
  bow: "bow",
};

class Orc extends Character {
  constructor(name) {
    super(name, "orc");
  }

  speak() {
    console.log("Mirdautas vras!");
  }

  weapon(weapon) {
    this.weapon = weapon;
  }

  weaponAttack() {
    switch (this.weapon) {
      case "bow":
        console.log("***Shooting an arrow at the target***");
        break;
      case "sword":
        console.log("***Swinging the sword at the target***");
        break;
      default:
        console.log("***Attacking the target with bare hands***");
        break;
    }
  }
}

class Elf extends Character {
  constructor(name) {
    super(name, "elf");
  }

  speak() {
    console.log("Mae govannen!");
  }

  spell(spellName) {
    this.spell = spellName;
  }

  castSpell() {
    switch (this.spell) {
      case "summon water spirit":
        console.log("***A wave of water flows to the target***");
        break;
      case "magic barrier":
        console.log("***A bubble barrier shields you from any harm***");
        break;
      default:
        console.log("***Choose a spell first***");
        break;
    }
  }
}

class Human extends Character {
  constructor(name) {
    super(name, "human");
  }
}

const gothmog = new Orc("Gothmog");
gothmog.speak();
gothmog.weapon(weaponArsenal.bow);
gothmog.weaponAttack();

const arwen = new Elf("Arwen");
arwen.speak();
arwen.spell(spellBook.magicBarrier);
arwen.castSpell();

const eomer = new Human("Eomer");
eomer.speak();
