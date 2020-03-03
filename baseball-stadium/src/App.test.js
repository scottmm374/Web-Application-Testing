import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { fireEvent } from "@testing-library/react";

afterEach(rtl.cleanup);

test("ball is found", () => {
  const { getByText } = rtl.render(<App />);
  getByText("Ball");
});

test("strike is found", () => {
  const { getByText } = rtl.render(<App />);
  getByText("Strike");
});

test("foul is found", () => {
  const { getByText } = rtl.render(<App />);
  getByText("Foul");
});

test("hit is found", () => {
  const { getByText } = rtl.render(<App />);
  getByText("Hit");
});

test(" hit increments by 1", () => {
  const { getByText } = rtl.render(<App />);
  fireEvent(
    getByText("Hit"),
    new MouseEvent("click", {
      hit: 1
    })
  );
});

test(" balls increments by 1", () => {
  const { getByText } = rtl.render(<App />);
  fireEvent(
    getByText("Ball"),
    new MouseEvent("click", {
      balls: 1
    })
  );
});

test(" strikes increments by 1", () => {
  const { getByText } = rtl.render(<App />);
  fireEvent(
    getByText("Strike"),
    new MouseEvent("click", {
      strikes: 1
    })
  );
});

test(" fouls increments by 1", () => {
  const { getByText } = rtl.render(<App />);
  fireEvent(
    getByText("Foul"),
    new MouseEvent("click", {
      fouls: 1
    })
  );
});
