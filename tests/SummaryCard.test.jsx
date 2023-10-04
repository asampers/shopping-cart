import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryCard from "../src/components/SummaryCard";
import { MemoryRouter } from "react-router-dom";

describe("SummaryCard component", () => {
  const prodOne = {id:1, title:"One", description: "Description", image:"Img", price: "1", quantity: "30", inCart: true};
  const prodTwo = {id:2, title:"Two", description: "Description2", image:"Img", price: "2", quantity: "10", inCart: true};

  it("can toggle editing of products", async () => {
    const user = userEvent.setup()
    render(<MemoryRouter>
      <SummaryCard products={[prodOne, prodTwo]} />
    </MemoryRouter>)
    const editBtn = screen.getByRole('button', {  name: /edit cart/i});
    expect(screen.queryByText("Edit Cart")).toBeInTheDocument();
    expect(screen.queryByText("Save Edits")).toBeNull();
    await user.click(editBtn);
    expect(screen.queryByText("Edit Cart")).toBeNull()
    expect(screen.queryByText("Save Edits")).toBeInTheDocument()
  })
})