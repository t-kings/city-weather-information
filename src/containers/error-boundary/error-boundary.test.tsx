import React from "react";
import { ErrorBoundary } from "./error-boundary";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

const ErrorComponent = () => {
  throw new Error("error");
};

describe("<ErrorBoundary />", () => {
  let container: Element | null = null;
  beforeEach(() => {
    /**
     *  setup a DOM element as a render target
     */
    container = document.createElement("div");
    document.body.appendChild(container);
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
  });

  it("Should display something is wrong if child component has error", () => {
    act(() => {
      render(
        <BrowserRouter>
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </BrowserRouter>,
        container
      );
    });
    expect(container?.innerHTML).toContain("Something went wrong");
  });

  it("Should render children if no error", () => {
    const string = "Hello";
    act(() => {
      render(
        <BrowserRouter>
          <ErrorBoundary>{string}</ErrorBoundary>
        </BrowserRouter>,
        container
      );
    });
    expect(container?.innerHTML).toContain(string);
  });
});
