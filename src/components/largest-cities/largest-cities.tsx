/**
 *
 * @description Largest Cities component
 */

import { COMPONENT_IDS } from "../../constants";
import { connect, ConnectedProps } from "react-redux";
import { useEffect } from "react";
import {
  addToFavoriteCity,
  getLargestCities,
  removeCityFromLargest,
} from "../../store";
import { RootStoreType } from "../../store/types";
import { sortObjectArrayAlphabetically } from "../../helpers";

const LargestCities_ = ({
  largestCities,
  getLargestCities,
  addFavoriteCity,
  removeCityFromLargest,
}: PropsFromRedux) => {
  useEffect(() => {
    getLargestCities();
  }, [getLargestCities]);

  const removeCity = (city: string) => {
    removeCityFromLargest(city);
  };

  const restore = () => {
    getLargestCities(true);
  };

  const addToFavorite = (city: string) => {
    addFavoriteCity(city);
  };
  return (
    <section id={COMPONENT_IDS.LARGEST_CITIES}>
      <div>
        <h2>Largest Cities</h2>
        {largestCities.length > 0 ? (
          <>
            {largestCities.map((_city: any) => (
              <div key={_city.city}>
                <p>{_city.city}</p>
                <p>{_city.weatherInformation.current.temperature} °C</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeCity(_city.city);
                  }}
                >
                  Remove
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToFavorite(_city.city);
                  }}
                >
                  Add to Favorite
                </button>
              </div>
            ))}
          </>
        ) : (
          <>
            <p>You have cleared out this list</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                restore();
              }}
            >
              Restore
            </button>
          </>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = ({ largestCities }: RootStoreType) => {
  return {
    // sort cities alphabetically
    largestCities: sortObjectArrayAlphabetically(largestCities.cities, "city"),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLargestCities: (forceUpdate?: boolean) =>
      dispatch(getLargestCities(forceUpdate)),
    addFavoriteCity: (city: string) => dispatch(addToFavoriteCity(city)),
    removeCityFromLargest: (city: string) =>
      dispatch(removeCityFromLargest(city)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const LargestCities = connector(LargestCities_);
