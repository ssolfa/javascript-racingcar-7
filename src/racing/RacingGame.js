import View from "../View/view.js";
import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.carNames = [];
    this.cars = [];
    this.repeatTime = 0;
  }

  async start() {
    this.carNames = await View.readCarsName();
    this.cars = this.carNames.map((name) => new Car(name));
    this.repeatTime = await View.readRepeatTime();

    for (let i = 0; i < this.repeatTime; i++) {
      this.cars.forEach((car) => this.moveCar(car));
      this.displayCurrentDistances();
    }
    this.getWinners();
  }

  moveCar(car) {
    if (car.canMove()) {
      car.move();
    }
  }

  displayCurrentDistances() {
    this.cars.forEach((car) => View.print(car.currentDistance()));
    View.print("");
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getDistance()));
    const winners = this.cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName())
      .join(", ");

    View.print(`최종 우승자 : ${winners}`);
  }
}

export default RacingGame;
