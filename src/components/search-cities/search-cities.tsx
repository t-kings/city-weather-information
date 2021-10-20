/**
 *
 * @description Search Cities for weather information
 */

import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../../containers";
import { citiesAPI } from "../../services";
import { addToFavoriteCity, removeCityFromFavorite } from "../../store";
import { Button, Input } from "..";
import Styles from "./style.module.css";
import { cities } from "../../database";
import { Heart } from "../../assets/";
import { RootStoreType } from "../../store/types";
import { COMPONENT_IDS } from "../../constants";

const SearchCities_ = ({
  addFavoriteCity,
  removeCityFromFavorite,
  favoriteCities,
}: PropsFromRedux) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filteredCities, setFilteredCities] = useState<
    { country: string; city: string; population: number }[]
  >([]);

  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    /**
     * * Get random city
     */
    const randomIndex = Math.floor(Math.random() * cities.length);
    const city = cities[randomIndex];
    setPlaceholder(city.city);
  }, []);

  const handleSearch = async () => {
    if (isLoading) {
      return "";
    }
    setIsLoading(true);
    try {
      const searchCities = await citiesAPI.queryCities(searchText);
      setFilteredCities(searchCities);
      setShowModal(true);
    } catch (error: any) {}
    setIsLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
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

  const isCityAFavorite = (city: string) => {
    try {
      const _city = favoriteCities.find((_city) => _city === city);

      if (_city) {
        return true;
      }
      return false;
    } catch (error: any) {
      console.log(error.message);
      return false;
    } finally {
    }
  };

  return (
    <section id={COMPONENT_IDS.SEARCH_CITIES} className={Styles.section}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Input
          type="text"
          value={searchText}
          onChange={(e: any) => {
            setSearchText(e.target.value);
          }}
          required
          placeholder={placeholder}
        />

        <Button style={{ marginLeft: 10 }}>Search</Button>
      </form>
      <Modal
        titleComponent={
          <p className={Styles.resultTitle}>
            Result for <span>{searchText}</span>
          </p>
        }
        closeModal={closeModal}
        showModal={showModal}
      >
        <div className={Styles.result}>
          {/* Empty Result */}
          {filteredCities.length === 0 ? (
            <p className={Styles.empty}>
              There is no search result for <span>{searchText}</span>
            </p>
          ) : null}

          {/* For Result not empty */}
          {filteredCities.length !== 0 ? (
            <div className={Styles.resultList}>
              <ul>
                {filteredCities.map((_filteredCity) => (
                  <li key={_filteredCity.city}>
                    <div>
                      <Heart
                        onClick={(e: any) => {
                          e.preventDefault();
                          handleFavorite(_filteredCity.city);
                        }}
                        className={Styles.heart}
                        isOutline={!isCityAFavorite(_filteredCity.city)}
                      />
                      <p>
                        {_filteredCity.city}, {_filteredCity.country}
                      </p>
                    </div>
                    <Link
                      to={`/weather-information/${_filteredCity.city}`}
                      onClick={closeModal}
                    >
                      See Weather
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Modal>
    </section>
  );
};

const mapStateToProps = ({ favoriteCities }: RootStoreType) => {
  return {
    favoriteCities: favoriteCities.cities,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addFavoriteCity: (city: string) => dispatch(addToFavoriteCity(city)),
    removeCityFromFavorite: (city: string) =>
      dispatch(removeCityFromFavorite(city)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const SearchCities = connector(SearchCities_);
