/**
 *
 * @description Largest Cities component
 * TODO: display 15 largest cities in the world by population in alphabetical order and the current temperature for each.
 * TODO: Users should be able to remove these entries individually from the list to clean it up.
 * TODO: Users can reset and bring back the cities
 * TODO: Display add to favorite cities button
 */

import { COMPONENT_IDS } from "../../constants";

export const LargestCities = () => {
  return (
    <section id={COMPONENT_IDS.LARGEST_CITIES}>
      <div>
        <h2>Largest Cities</h2>
      </div>
    </section>
  );
};
