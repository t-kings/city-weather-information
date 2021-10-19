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
        <h2>Favorite Cities</h2>
        {favoriteCities.length > 0 ? (
          <>
            {favoriteCities.map((_city: string) => (
              <div key={_city}>
                <p>{_city}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeCity(_city);
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
            <Link to={`/#${COMPONENT_IDS.SEARCH_CITIES}`}>
              Search for Cities
            </Link>
          </>
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
