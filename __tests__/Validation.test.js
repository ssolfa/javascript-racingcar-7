// import { ERROR } from "../src/constants/constants.js";
// import Validation from "../src/View/Validation.js";

// describe("Validation", () => {
//   describe("validateCarNames", () => {
//     test("특수 문자가 포함된 이름은 에러를 발생시킨다", () => {
//       expect(() => Validation.validateCarNames(["pobi!", "woni"])).toThrow(
//         ERROR.specialChar
//       );
//     });

//     test("이름이 5글자를 초과하면 에러를 발생시킨다", () => {
//       expect(() => Validation.validateCarNames(["abcdef", "woni"])).toThrow(
//         ERROR.moreThanFiveLetters
//       );
//     });

//     test("중복된 이름이 있으면 에러를 발생시킨다", () => {
//       expect(() => Validation.validateCarNames(["pobi", "pobi"])).toThrow(
//         ERROR.duplicate
//       );
//     });
//   });

//   describe("validateRepeatTime", () => {
//     test("유효하지 않은 반복 횟수는 에러를 발생시킨다", () => {
//       expect(() => Validation.validateRepeatTime(-1)).toThrow(ERROR.tryCount);
//       expect(() => Validation.validateRepeatTime("three")).toThrow(
//         ERROR.tryCount
//       );
//     });

//     test("유효한 반복 횟수는 에러를 발생시키지 않는다", () => {
//       expect(() => Validation.validateRepeatTime(5)).not.toThrow();
//     });
//   });
// });

import Validation from "../src/View/Validation.js";
import { ERROR } from "../src/constants/constants.js";

describe("Validation", () => {
  describe("validateCarNames", () => {
    test.each([
      { carNames: ["pobi", "woni", "jun"], shouldThrow: false },
      {
        carNames: ["pobi", "wo@ni"],
        shouldThrow: true,
        expectedError: ERROR.specialChar,
      },
      {
        carNames: ["pobi", "123456"],
        shouldThrow: true,
        expectedError: ERROR.moreThanFiveLetters,
      },
      {
        carNames: ["pobi", " po bi"],
        shouldThrow: true,
        expectedError: ERROR.space,
      },
      {
        carNames: ["pobi", "pobi"],
        shouldThrow: true,
        expectedError: ERROR.duplicate,
      },
    ])(
      "이름 유효성 검사: $carNames",
      ({ carNames, shouldThrow, expectedError }) => {
        if (shouldThrow) {
          expect(() => Validation.validateCarNames(carNames)).toThrow(
            expectedError
          );
        } else {
          expect(() => Validation.validateCarNames(carNames)).not.toThrow();
        }
      }
    );
  });

  describe("validateRepeatTime", () => {
    test.each([
      { repeatTime: 5, shouldThrow: false },
      { repeatTime: 0, shouldThrow: true, expectedError: ERROR.tryCount },
      { repeatTime: -3, shouldThrow: true, expectedError: ERROR.tryCount },
      { repeatTime: "three", shouldThrow: true, expectedError: ERROR.tryCount },
      {
        repeatTime: "123abc",
        shouldThrow: true,
        expectedError: ERROR.tryCount,
      },
    ])(
      "반복 횟수 유효성 검사: $repeatTime",
      ({ repeatTime, shouldThrow, expectedError }) => {
        if (shouldThrow) {
          expect(() => Validation.validateRepeatTime(repeatTime)).toThrow(
            expectedError
          );
        } else {
          expect(() => Validation.validateRepeatTime(repeatTime)).not.toThrow();
        }
      }
    );
  });
});
