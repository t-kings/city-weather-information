import React from "react";
import { PageRoutes } from "./page.routes";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Provider } from "react-redux";
import { store } from "../store";
import { WeatherInformation } from "../pages";

describe("<PageRoutes />", () => {
  let container: Element | null = null;
  let homeContainer: Element | null = null;
  beforeEach(() => {
    /**
     *  setup a DOM element as a render target
     */
    container = document.createElement("div");
    document.body.appendChild(container);
    homeContainer = document.createElement("div");
    document.body.appendChild(homeContainer);
  });

  afterEach(() => {
    /**
     * remove the render target on exiting
     */
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
    if (homeContainer) {
      unmountComponentAtNode(homeContainer);
      homeContainer.remove();
      homeContainer = null;
    }
  });

  it("Should return 404 page on bad route", () => {
    act(() => {
      render(
        <BrowserRouter>
          <MemoryRouter initialEntries={["/obviously-wrong-route"]}>
            <PageRoutes />
          </MemoryRouter>
        </BrowserRouter>,
        container
      );
    });
    expect(container?.innerHTML).toContain("<h1>Page not found.</h1>");
  });

  it("Should a home component at /", () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <MemoryRouter initialEntries={["/"]}>
              <PageRoutes />
            </MemoryRouter>
          </BrowserRouter>
        </Provider>,
        container
      );
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
        homeContainer
      );
    });

    expect(container?.innerHTML).toContain(
      homeContainer?.innerHTML.substring(0, 20)
    );
  });

  it("Should a weather component  at /weather-information/:city", () => {
    const city = "lagos";
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <MemoryRouter initialEntries={[`/weather-information/${city}`]}>
              <PageRoutes />
            </MemoryRouter>
          </BrowserRouter>
        </Provider>,
        container
      );
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WeatherInformation />
          </BrowserRouter>
        </Provider>,
        homeContainer
      );
    });
    expect(container?.innerHTML).toContain(city);

    expect(container?.innerHTML).toContain(
      homeContainer?.innerHTML.substring(0, 20)
    );
  });
});
