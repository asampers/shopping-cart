import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Root from '../src/routes/Root';
import { MemoryRouter } from 'react-router-dom';

describe('Root Component', () => {
  it("checkoutCard not visible upon first render", async () => {
    render(
      <MemoryRouter>
        <Root/>
      </MemoryRouter>
    );
    const checkoutCard = screen.getByTestId("checkoutCard")
    expect(checkoutCard).not.toBeVisible()
  })

  it("checkoutCard visible once clicked", async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Root/>
      </MemoryRouter>
    );
    const toggleCheckoutCardBtn = screen.getByTestId('toggler')
    const checkoutCard = screen.getByTestId("checkoutCard")
    await user.click(toggleCheckoutCardBtn)
    expect(checkoutCard).toBeVisible()
  })
})
