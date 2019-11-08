import { decorate, observable } from "mobx";

class StoreName {
  rateOfUIChangePerSecondForCounter = 50;
  counter = 0;
  perSecond = 0;
  perClick = 1;
  perClickPrice = 10;
  perSecondUpgrades = [
    {
      id: 1,
      value: 100,
      price: 1000,
      label: "Per Second 1",
      priceMultiplierPerPurchase: 1.35
    },
    {
      id: 2,
      value: 50000,
      price: 250000,
      label: "Per Second 2",
      priceMultiplierPerPurchase: 1.35
    }
  ];

  perSecondFunction = () => {
    this.counter += this.perSecond / this.rateOfUIChangePerSecondForCounter;
  };
  timer = setInterval(
    this.perSecondFunction,
    1000 / this.rateOfUIChangePerSecondForCounter
  );

  toNumber(number, e) {
    // console.log(this.state.notation)
    return number > 999999 && this.notation
      ? number.toExponential()
      : number.toLocaleString(navigator.language, {
          maximumFractionDigits: 0
        });
  }

  purchaseCPC = () => {
    if (this.counter >= this.perClickPrice) {
      this.counter -= this.perClickPrice;
      this.perClick += 1;
      this.perClickPrice = Math.round(this.perClickPrice * 1.35);
    }
  };
  purchaseUpgrade = upgrade => {
    if (this.counter >= upgrade.price) {
      this.counter -= upgrade.price;
      upgrade.price = Math.round(
        upgrade.price * upgrade.priceMultiplierPerPurchase
      );
      this.perSecond += upgrade.value;
    }
  };
}
decorate(StoreName, {
  counter: observable,
  perClick: observable,
  perClickPrice: observable,
  perSecondUpgrades: observable,
  perSecond: observable
});

export default new StoreName();
