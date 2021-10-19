/**
 *
 * @description Largest Cities component
 */

import { COMPONENT_IDS } from "../../constants";
import { connect, ConnectedProps } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addToFavoriteCity,
  getLargestCities,
  removeCityFromLargest,
  removeCityFromFavorite,
} from "../../store";
import { RootStoreType } from "../../store/types";
import { sortObjectArrayAlphabetically } from "../../helpers";
import Styles from "./style.module.css";
import { Heart } from "../../assets/";
import { Button } from "..";

const LargestCities_ = ({
  largestCities,
  getLargestCities,
  addFavoriteCity,
  removeCityFromLargest,
  removeCityFromFavorite,
  favoriteCities,
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

  const isCityAFavorite = (city: string) => {
    try {
      const _city = favoriteCities.find((_city) => _city === city);

      if (_city) {
        return true;
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };

  /**
   *
   * @param city
   * *  Toggle favorite
   * TODO: toast result
   */
  const handleFavorite = (city: string) => {
    if (isCityAFavorite(city)) {
      removeCityFromFavorite(city);
    } else {
      addFavoriteCity(city);
    }
  };

  return (
    <section className={Styles.section} id={COMPONENT_IDS.LARGEST_CITIES}>
      {largestCities.length > 0 ? (
        <ul className={Styles.resultList}>
          {largestCities.map((_city: any) => (
            <li key={_city.city}>
              <div>
                <Heart
                  onClick={(e: any) => {
                    e.preventDefault();
                    handleFavorite(_city.city);
                  }}
                  className={Styles.heart}
                  isOutline={!isCityAFavorite(_city.city)}
                />
                <Link to={`/weather-information/${_city.city}`}>
                  {_city.city}, {_city.country}
                </Link>
              </div>
              <div>
                <div className={Styles.temperature}>
                  <p>{_city.weatherInformation.current.temperature} °C</p>
                </div>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    removeCity(_city.city);
                  }}
                  style={{
                    background: "red",
                  }}
                >
                  Hide
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={Styles.empty}>
          <p>You have cleared out this list</p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              restore();
            }}
          >
            Restore
          </Button>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = ({ largestCities, favoriteCities }: RootStoreType) => {
  return {
    // sort cities alphabetically
    largestCities: sortObjectArrayAlphabetically(largestCities.cities, "city"),

    favoriteCities: favoriteCities.cities,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLargestCities: (forceUpdate?: boolean) =>
      dispatch(getLargestCities(forceUpdate)),
    addFavoriteCity: (city: string) => dispatch(addToFavoriteCity(city)),
    removeCityFromLargest: (city: string) =>
      dispatch(removeCityFromLargest(city)),
    removeCityFromFavorite: (city: string) =>
      dispatch(removeCityFromFavorite(city)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const LargestCities = connector(LargestCities_);
