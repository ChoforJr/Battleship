//Begin your app by creating the Ship class/factory (your choice).
import { ship } from "./ship.js";
import { describe, expect, test } from "@jest/globals";

const testShip = ship(3);

describe("ship", () => {
  test("ship Add example 1", () => {
    expect(testShip.hit()).toEqual(1);
  });
  test("ship Add example 2", () => {
    expect(testShip.hit()).toEqual(2);
  });
  test("ship Add example 3", () => {
    expect(testShip.isSunk()).toEqual(false);
  });
  test("ship Add example 4", () => {
    expect(testShip.hit()).toEqual(3);
  });
  test("ship Add example 5", () => {
    expect(testShip.isSunk()).toEqual(true);
  });
});
