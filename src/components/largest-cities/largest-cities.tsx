/**
 *
 * @description Largest Cities component
 * TODO: Display add to favorite cities button
 * TODO: Persist clearing on refresh
 */

import { COMPONENT_IDS } from "../../constants";
import { connect, ConnectedProps } from "react-redux";
import { useEffect, useState } from "react";
import { getLargestCities } from "../../store";
import { RootStoreType } from "../../store/types";
import { sortObjectArrayAlphabetically } from "../../helpers";

const LargestCities_ = ({
  largestCities,
  getLargestCities,
}: PropsFromRedux) => {
  const [cities, setCities] = useState<any>([]);

  useEffect(() => {
    if (largestCities.length === 0) {
      getLargestCities();
    }
  }, [largestCities.length, getLargestCities]);

  useEffect(() => {
    setCities(largestCities);
  }, [largestCities]);

  const removeCity = (city: string) => {
    setCities(cities.filter((_city: any) => _city.city !== city));
  };

  const restore = () => {
    setCities(largestCities);
  };
  return (
    <section id={COMPONENT_IDS.LARGEST_CITIES}>
      <div>
        <h2>Largest Cities</h2>
        {cities.length > 0 ? (
          <>
            {cities.map((_city: any) => (
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
    getLargestCities: () => dispatch(getLargestCities()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const LargestCities = connector(LargestCities_);
