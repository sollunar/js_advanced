class Billing {
  constructor(amount) {
    this.amount = amount ?? 0;
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(hours, amount) {
    super(amount);
    this.hours = hours;
  }
  calculateTotal() {
    return this.amount * this.hours;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class ItemBilling extends Billing {
  constructor(totalItems, amount) {
    super(amount);
    this.totalItems = totalItems;
  }
  calculateTotal() {
    return this.totalItems * this.amount;
  }
}

const billing = new Billing();
console.log(billing.calculateTotal());
const hourBilling = new HourBilling(4, 10);
console.log(hourBilling.calculateTotal());
const fixBilling = new FixBilling(10);
console.log(fixBilling.calculateTotal());
