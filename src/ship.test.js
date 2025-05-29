import { ship } from "./ship.js";
import { describe, expect, test } from "@jest/globals";

const testShip = ship(3);

describe("ship", () => {
  test("ship example 1", () => {
    expect(testShip.hit()).toEqual(1);
  });
  test("ship example 2", () => {
    expect(testShip.hit()).toEqual(2);
  });
  test("ship example 3", () => {
    expect(testShip.isSunk()).toEqual(false);
  });
  test("ship example 4", () => {
    expect(testShip.hit()).toEqual(3);
  });
  test("ship example 5", () => {
    expect(testShip.isSunk()).toEqual(true);
  });
});
