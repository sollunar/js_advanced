"use-strict";

class Car {
  #brand;
  #model;
  #_mileage;
  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.mileage = mileage;
  }
  set mileage(mileage) {
    this.#_mileage = mileage;
  }

  get mileage() {
    console.log(`Пробег равен: ${this.#_mileage}`);
  }

  info() {
    console.log(`${this.#brand} ${this.#model} с пробегом ${this.#_mileage}`);
  }
}

const bwmX5 = new Car("BMW", "X5", "75000");

bwmX5.info();
bwmX5.mileage = "80000";
bwmX5.mileage;
