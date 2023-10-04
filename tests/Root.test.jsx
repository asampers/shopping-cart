import { useState } from "react";
import React from "react";
import { render, renderHook, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from 'vitest'
import Root from "../src/routes/Root";
import Shop from "../src/routes/Shop";
import Homepage from "../src/routes/Homepage";
import Checkout from "../src/routes/Checkout";
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Root route", () => {
  it("correctly renders with products", async () => {
    const user = userEvent.setup();
    
    const {result} = renderHook(() => {
      const [data, setData] = useState(null)
      React.useEffect(() => {
        setData([{id:1, title:"Title", description: "Description", image:"Img", price: "1", quantity: "1", inCart: true}])
      }, [])
      return data
    })

  vi.mock('react-router-dom', async () => {
  const data = [{id:1, title:"Title", description: "Description", image:"Img", price: "1", quantity: "1", inCart: true}];
  const onClick = vi.fn()
  const onChange = vi.fn()
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
        useOutletContext: () => ({
        data: data,
        error: null,
        loading: false,
        handleClick: onClick,
        handleChange: onChange,
        cartProducts: vi.fn(() => {return data}),
      }),
    }})
    
    const routes = [
    {
      path: "/",
      element: <Root />,
      children:[
      {
        index: true,
        element: <Homepage />,
      },
      {
      path: "/shop",
      element: <Shop />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      ]
    }
  ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/shop", "/checkout"],
      initialIndex: 2,
    });

    render(<MemoryRouter><Shop /></MemoryRouter>);
    
    screen.debug()
  })
})