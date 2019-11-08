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

  updateLocalStorage = () => {
    // This next line will stringify the data
    let data = JSON.stringify({
      counter: this.counter,
      perSecond: this.perSecond,
      perClick: this.perClick,
      perClickPrice: this.perClickPrice,
      perSecondUpgrades: this.perSecondUpgrades
    });
    localStorage.setItem("data", data);
  };
  // Update cookies every 5 seconds
  cookiesTimer = setInterval(this.updateLocalStorage, 5000);

  retrieveFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      this.counter = data.counter;
      this.perSecond = data.perSecond;
      this.perClick = data.perClick;
      this.perClickPrice = data.perClickPrice;
      this.perSecondUpgrades = data.perSecondUpgrades;
    }
  };

  perSecondFunction = () => {
    this.counter += this.perSecond / this.rateOfUIChangePerSecondForCounter;
  };
  timer = setInterval(
    this.perSecondFunction,
    1000 / this.rateOfUIChangePerSecondForCounter
  );

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
