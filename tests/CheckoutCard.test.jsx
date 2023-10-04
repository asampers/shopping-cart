import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutCard from "../src/components/CheckoutCard";
import Root from "../src/routes/Root";
import { MemoryRouter } from "react-router-dom";

describe("Checkout Card component", () => {
  it("renders correctly with no products", async () => {

    const mockProducts = [{id:1, title:"Title", description: "Description", image:"Img", price: "1", quantity: "1", inCart: true}];
    const mockClick = vi.fn();
    const mockChange = vi.fn();
    const mockToggle = vi.fn();
    const visibility = "visible";
 
    
    render(
      <MemoryRouter>
        <CheckoutCard 
          status={visibility}
          toggle={mockToggle}
          products={mockProducts}
          onChange={mockChange}
          onClick={mockClick}
        />
      </MemoryRouter>
    )
    const up = screen.getByRole("input", {name:"quantity"})
    screen.debug()
  })
})