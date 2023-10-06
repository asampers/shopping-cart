import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect,  } from 'vitest'
import Shop from "../src/routes/Shop";
import {
  MemoryRouter,
} from "react-router-dom";

describe("Shop route", () => {
  it("correctly renders placecards when loading", async () => {
  
  vi.mock('react-router-dom', async () => {
  const data = [{id:1, title:"Title", description: "Description", image:"Img", price: "1", quantity: "1", inCart: true}];
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
        useOutletContext: () => ({
        data: data,
        error: null,
        loading: true,
      }),
    }})
    
    render(<MemoryRouter><Shop /></MemoryRouter>);
    expect(screen.queryByText("Description")).not.toBeInTheDocument()
  });
})