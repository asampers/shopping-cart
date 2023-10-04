import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutCard from "../src/components/CheckoutCard";
import { MemoryRouter } from "react-router-dom";

describe("Checkout Card component", () => {
  const mockClick = vi.fn();
  const mockChange = vi.fn();
  const mockToggle = vi.fn();
  const visibility = "visible";
  const prodOne = {id:1, title:"One", description: "Description", image:"Img", price: "1", quantity: "30", inCart: true};
  const prodTwo = {id:2, title:"Two", description: "Description2", image:"Img", price: "2", quantity: "10", inCart: true};
  it("renders correctly with one product", async () => {
 
    render(
      <MemoryRouter>
        <CheckoutCard 
          status={visibility}
          toggle={mockToggle}
          products={[prodOne]}
          onChange={mockChange}
          onClick={mockClick}
        />
      </MemoryRouter>
    )
    const subTotal = screen.getByText("subtotal: $30.00")
    expect(subTotal).toBeInTheDocument()
  })

  it("renders correctly with more than one product", async () => {
    render(
      <MemoryRouter>
        <CheckoutCard 
          status={visibility}
          toggle={mockToggle}
          products={[prodOne, prodTwo]}
          onChange={mockChange}
          onClick={mockClick}
        />
      </MemoryRouter>
    )
    const subTotal = screen.getByText("subtotal: $50.00")
    expect(subTotal).toBeInTheDocument()
  })

  it("renders correctly with no products", async () => {
    render(
      <MemoryRouter>
        <CheckoutCard 
          status={visibility}
          toggle={mockToggle}
          products={[]}
          onChange={mockChange}
          onClick={mockClick}
        />
      </MemoryRouter>
    )
    const subTotal = screen.getByText("subtotal: $0.00")
    const noItems = screen.getByText(/there are no items\./i)
    expect(subTotal).toBeInTheDocument()
    expect(noItems).toBeInTheDocument()
  })
})