import React from "react";
import { Switch, Route } from "react-router-dom";
import { PageLayout } from "../containers/layout";
import { Home, NotFound, WeatherInformation } from "../pages";

export const PageRoutes = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/weather-information/:city"
          component={WeatherInformation}
        />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
};
