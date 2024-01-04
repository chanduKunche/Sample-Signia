import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { it, expect, vi } from "vitest";
import RouterPage from "./RouterPage";
//import App from './App';
import * as router from "react-router";
//import { useNavigate } from "react-router-dom"

it("display heading in the main page", () => {
  render(
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
  const ele = screen.getByText(/Connect Hearing Aids/i);
  expect(ele);
});

it("display retry button in main page", () => {
  render(
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
  const element = screen.getByText(/Retry/i);
  expect(element);
});

it("display ok button in main page", () => {
  render(
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
  const element = screen.getByText(/Ok/i);
  expect(element);
});

it("display cancel button in main page", () => {
  render(
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
  const element = screen.getByText(/Cancel/i);
  expect(element);
});

const navigate = vi.fn();
vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);
// return navigate

it("OK button is working or not", async () => {
  render(
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
  
  const okButton = screen.getByText(/Ok/i);
  fireEvent.click(okButton);
  const mockedNavigator = vi.fn();

  vi.spyOn(router, "useNavigate").mockImplementation(() => mockedNavigator);
  await waitFor(() => expect(navigate).toHaveBeenCalledWith("/SelectedHAs"));
  
});

