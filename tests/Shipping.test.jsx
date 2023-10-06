import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shipping from "../src/components/Shipping";

describe("Shipping component", () => {
  const user = userEvent.setup();
  const onClick = vi.fn()
  it("can toggle billing component", async () => {
    render(<Shipping status={true} onClick={onClick}/>)

    const toggleBtn = screen.getByTestId("toggle")
    await user.click(toggleBtn)
    expect(onClick).toBeCalled()
  })
})