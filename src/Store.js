import { decorate, observable } from "mobx";

class Todo {
  counter = 0;
  perClick = 1;
  perClickPrice = 10;

  purchaseCPC = () => {
    if (this.counter >= this.perClickPrice) {
      this.counter -= this.perClickPrice;
      this.perClick += 1;
      this.perClickPrice = Math.round(this.perClickPrice * 1.35);
    }
  };
}
decorate(Todo, {
  counter: observable,
  perClick: observable,
  perClickPrice: observable
});

export default new Todo();
