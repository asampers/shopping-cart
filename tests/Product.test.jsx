import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../src/components/Product";

describe("Product component", () => {
  const inCart = {id:1, title:"One", description: "Description", image:"Img", price: "1", quantity: "30", inCart: true};
  const notInCart = {id:2, title:"Two", description: "Description2", image:"Img", price: "2", quantity: "10", inCart: false};
  const mockClick = vi.fn();
  const onChange = vi.fn();
  const user = userEvent.setup()

  it("correctly renders product when in cart", async () => {
    
    render(
      <Product 
        item={inCart} 
        onChange={onChange} 
        onClick={mockClick} 
      />
    )
    expect(screen.getByRole("button", {name: "In Cart"})).toBeInTheDocument()
  })

  it("correctly renders product when not in cart", async () => {
    render(
      <Product 
        item={notInCart} 
        onChange={onChange} 
        onClick={mockClick} 
      />
    )
    expect(screen.getByRole("button", {name: "Add to Cart"})).toBeInTheDocument()
    const deleteBtn = screen.getByTestId("delete")
    await user.click(deleteBtn)
    expect(mockClick).toBeCalled()
  })
})