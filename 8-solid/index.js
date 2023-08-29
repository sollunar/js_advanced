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
    return super.calculateTotal() * this.hours;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return super.calculateTotal();
  }
}

class ItemBilling extends Billing {
  constructor(totalItems, amount) {
    super(amount);
    this.totalItems = totalItems;
  }
  calculateTotal() {
    return super.calculateTotal() * this.totalItems;
  }
}

const billing = new Billing();
console.log(billing.calculateTotal());
const hourBilling = new HourBilling(4, 10);
console.log(hourBilling.calculateTotal());
const fixBilling = new FixBilling(10);
console.log(fixBilling.calculateTotal());
const itemBilling = new ItemBilling(2, 10);
console.log(itemBilling.calculateTotal());
