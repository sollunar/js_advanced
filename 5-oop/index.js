const Character = function (name, race, lang) {
  this.name = name;
  this.race = race;
  this.lang = lang;
};

Character.prototype.speak = function () {
  console.log(`My name is ${this.name}. I speak ${this.lang}`);
};

const Weapon = function (weapon) {
  this.weapon = weapon;
};

Weapon.prototype.attack = function () {
  console.log(`Attacking with ${this.weapon}`);
};

const Sword = function () {
  Weapon.call(this, "sword");
};

Sword.prototype = Object.create(Sword.prototype);
Sword.prototype.constructor = Sword;
Sword.prototype.attack = function () {
  console.log(`===Swinging sword at the target===`);
};

const Spell = function (spell) {
  this.spell = spell;
};

Spell.prototype.cast = function () {
  console.log(`Casting the ${this.spell}`);
};

const MagicBarrier = function () {
  Spell.call(this, "magic barrier");
};

MagicBarrier.prototype = Object.create(MagicBarrier.prototype);
MagicBarrier.prototype.constructor = MagicBarrier;
MagicBarrier.prototype.cast = function () {
  console.log(`***A bubble barrier shield you from any harm ***`);
};

const Orc = function (name, weapon) {
  this.weapon = weapon;
  Character.call(this, name, "orc", "black speech");
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.speak = function () {
  console.log(`===Mirdautas vras! I am ${this.name}. I speak ${this.lang}.===`);
};

// Orc.prototype.weaponAttack = function () {
//   switch (this.weapon) {
//     case "bow":
//       console.log("***Shooting an arrow at the target***");
//       break;
//     case "sword":
//       console.log("***Swingin the sword at the target***");
//       break;
//     default:
//       console.log("***Attacking the target with bare hands***");
//       break;
//   }
// };

const Elf = function (name, spell) {
  this.spell = spell;
  Character.call(this, name, "elf", "sindarin");
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.speak = function () {
  console.log(
    `***Mae govannen! My name is ${this.name}. I speak ${this.lang}.`
  );
};

const sword = new Sword();

const gothmog = new Orc("Gothmog", sword);
gothmog.speak();
gothmog.weapon.attack();

const magicBarrier = new MagicBarrier();

const arwen = new Elf("Arwen", magicBarrier);
arwen.speak();
arwen.spell.cast();
