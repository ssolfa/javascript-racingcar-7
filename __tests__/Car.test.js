import Car from "../src/racing/Car.js";

describe("Car", () => {
  test("자동차 생성 시 이름과 초기 거리가 설정된다", () => {
    const car = new Car("pobi");
    expect(car.getName()).toBe("pobi");
    expect(car.getDistance()).toBe(0);
  });

  test("car.move() 호출 시 자동차 거리가 증가한다", () => {
    const car = new Car("pobi");
    car.move();
    expect(car.getDistance()).toBe(1);
  });

  test("자동차가 이동 가능한 조건이 아니면 move()가 호출되지 않는다", () => {
    const car = new Car("pobi");
    const spy = jest.spyOn(car, "move");
    car.canMove = jest.fn(() => false);
    expect(spy).not.toHaveBeenCalled();
  });

  test("자동차의 현재 거리 문자열이 올바르게 출력된다", () => {
    const car = new Car("pobi");
    car.move();
    expect(car.currentDistance()).toBe("pobi : -");
  });
});
