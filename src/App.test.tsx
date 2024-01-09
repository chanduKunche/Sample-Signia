import { cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import { it,vi, describe, beforeEach, afterEach, expect } from "vitest";
import * as router from "react-router";
import App from "./App";

describe('App tests', () => {
  beforeEach(() => {
    render(<App/>);
    afterEach(() => {
      cleanup();
  });
  });
  it("display heading in the main page", () => {
    const text = screen.findByText("Connect Hearing Aids");
    expect(text);
  });

  it("display retry button in main page", () => {
    const element = screen.getByText(/Retry/i);
    expect(element);
  });
  
  it("display ok button in main page", () => {
    
    const element = screen.getByText(/Ok/i);
    expect(element);
  });
  
  it("display cancel button in main page", () => {
    
    const element = screen.getByText(/Cancel/i);
    expect(element);
  });
  
  const navigate = vi.fn();
  vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  
  it("OK button is working or not", async () => {
   
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
})




