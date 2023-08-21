const Character = function (name, race) {
  this.name = name;
  this.race = race;
  this.lang;
};

Character.prototype.speak = function () {
  switch (this.race) {
    case "elf":
      this.lang = "Mae govannen!";
      console.log(this.lang);
      break;
    case "orc":
      this.lang = "Mirdautas vras!";
      console.log(this.lang);
      break;
    default:
      console.log(".....");
      break;
  }
};

const spellBook = {
  magicBarrier: "magic barrier",
  summontWaterSpirit: "summon water spirit",
};

const weaponArsenal = {
  sword: "sword",
  bow: "bow",
};

const Orc = function (name) {
  Character.call(this, name, "orc");
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.speak = Character.prototype.speak;

Orc.prototype.weapon = function (weapon) {
  this.weapon = weapon;
};
Orc.prototype.weaponAttack = function () {
  switch (this.weapon) {
    case "bow":
      console.log("***Shooting an arrow at the target***");
      break;
    case "sword":
      console.log("***Swingin the sword at the target***");
      break;
    default:
      console.log("***Attacking the target with bare hands***");
      break;
  }
};

const Elf = function (name) {
  Character.call(this, name, "elf");
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.speak = Character.prototype.speak;
Elf.prototype.spell = function (spellName) {
  this.spell = spellName;
};
Elf.prototype.castSpell = function () {
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
};

const gothmog = new Orc("Gothmog");
gothmog.speak();
gothmog.weapon(weaponArsenal.bow);
gothmog.weaponAttack();

const arwen = new Elf("Arwen");
arwen.speak();
arwen.spell(spellBook.magicBarrier);
arwen.castSpell();
