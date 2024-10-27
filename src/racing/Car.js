import { Random } from "@woowacourse/mission-utils";

const THRESHOLD_FOR_MOVING_FORWARD = 4;

class Car {
  constructor(name) {
    this.carName = name;
    this.carDistance = "";
  }

  getName() {
    return this.carName;
  }

  getDistance() {
    return this.carDistance.length;
  }

  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= THRESHOLD_FOR_MOVING_FORWARD;
  }

  move() {
    this.carDistance += "-";
  }

  currentDistance() {
    return `${this.carName} : ${this.carDistance}`;
  }
}

export default Car;
