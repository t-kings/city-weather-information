import React from "react";
import { CityWeatherInformation } from "./city-weather-information";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { weatherStack } from "../../services";

describe("<CityWeatherInformation />", () => {
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

  it("Should display city info", async () => {
    const city = "Lagos";
    const weatherInformation = await weatherStack.getWeatherForecast(city);
    const { location, current } = weatherInformation;
    act(() => {
      render(<CityWeatherInformation city={city} />, container);
    });
    expect(container?.innerHTML).toContain(current?.wind_dir);
    expect(container?.innerHTML).toContain(current?.cloudcover);
    expect(container?.innerHTML).toContain(current?.humidity);
    expect(container?.innerHTML).toContain(current?.temperature);
    expect(container?.innerHTML).toContain(location?.country);
  });
});
