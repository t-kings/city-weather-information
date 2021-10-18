import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageLayout } from "../containers/layout";
import { Home, WeatherInformation } from "../pages";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/weather-information/:city"
            component={WeatherInformation}
          />
        </Switch>
      </PageLayout>
    </BrowserRouter>
  );
};
