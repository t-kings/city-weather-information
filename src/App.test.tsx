import React from "react";
import App from "./App";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe("<App />", () => {
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

  it("Should mount successfully", () => {
    act(() => {
      render(<App />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });
});
