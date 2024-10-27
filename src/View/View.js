import { Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class View {
  static async readCarsName() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",").map((name) => name.trim());
    Validation.validateCarNames(carNames);
    return carNames;
  }

  static async readRepeatTime() {
    const repeatTime = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    Validation.validateRepeatTime(repeatTime);
    return parseInt(repeatTime, 10);
  }

  static print(message) {
    Console.print(message);
  }
}

export default View;
