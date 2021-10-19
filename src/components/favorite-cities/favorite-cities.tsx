/**
 *
 * @description manage favorite cities
 */

import { connect, ConnectedProps } from "react-redux";
import { sortArrayAlphabetically } from "../../helpers";
import { useEffect } from "react";
import { getFavoriteCities, removeCityFromFavorite } from "../../store";
import { RootStoreType } from "../../store/types";
import { COMPONENT_IDS } from "../../constants";
import { Link } from "react-router-dom";
import Styles from "./style.module.css";
import { Heart } from "../../assets";

const FavoriteCities_ = ({
  favoriteCities,
  getFavoriteCities,
  removeCityFromFavorite,
}: PropsFromRedux) => {
  useEffect(() => {
    if (favoriteCities.length === 0) {
      getFavoriteCities();
    }
  }, [favoriteCities.length, getFavoriteCities]);

  const removeCity = (city: string) => {
    removeCityFromFavorite(city);
  };

  return (
    <section className={Styles.section} id={COMPONENT_IDS.FAVORITE_CITIES}>
      <div>
        {favoriteCities.length > 0 ? (
          <div className={Styles.resultList}>
            <ul>
              {favoriteCities.map((_city: string) => (
                <li key={_city}>
                  <div>
                    <Heart
                      onClick={(e: any) => {
                        e.preventDefault();
                        removeCity(_city);
                      }}
                      className={Styles.heart}
                      isOutline={false}
                    />
                    <p>{_city}</p>
                  </div>
                  <Link to={`/weather-information/${_city}`}>See Weather</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={Styles.empty}>
            <p>You have no favorite city</p>
            <Link to={`/#${COMPONENT_IDS.SEARCH_CITIES}`}>
              Search for Cities
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = ({ favoriteCities }: RootStoreType) => {
  return {
    // sort cities alphabetically
    favoriteCities: sortArrayAlphabetically(favoriteCities.cities),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getFavoriteCities: () => dispatch(getFavoriteCities()),
    removeCityFromFavorite: (city: string) =>
      dispatch(removeCityFromFavorite(city)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const FavoriteCities = connector(FavoriteCities_);
