import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, WeatherInformation } from "../pages";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/weather-information/:city"
          component={WeatherInformation}
        />
      </Switch>
    </BrowserRouter>
  );
};
