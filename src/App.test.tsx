import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it, expect, vi } from "vitest";
import * as router from "react-router";
import App from "./App";
//import { useNavigate } from "react-router-dom"

it("display heading in the main page", () => {
  render(<App/>);
  const text = screen.getByText(/Connect Hearing Aids/i);
  expect(text);
});

it("display retry button in main page", () => {
  render(<App/>);
  const element = screen.getByText(/Retry/i);
  expect(element);
});

it("display ok button in main page", () => {
  render(<App/>);
  const element = screen.getByText(/Ok/i);
  expect(element);
});

it("display cancel button in main page", () => {
  render(<App/>);
  const element = screen.getByText(/Cancel/i);
  expect(element);
});

const navigate = vi.fn();
vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);
// return navigate

it("OK button is working or not", async () => {
  render(<App/>);

  const okButton = screen.getByText(/Ok/i);
  fireEvent.click(okButton);
  await waitFor(() =>
    expect(navigate).toHaveBeenCalledWith("/SelectedHAs", {
      state: {
        left: "",
        right: "",
      },
    })
  );
});
