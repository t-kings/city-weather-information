/**
 *
 * @description Search Cities for weather information
 */

import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../../containers";
import { citiesAPI } from "../../services";
import { addToFavoriteCity } from "../../store";

const SearchCities_ = ({ addFavoriteCity }: PropsFromRedux) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filteredCities, setFilteredCities] = useState<
    { country: string; city: string; population: number }[]
  >([]);

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

  const addToFavorite = (city: string) => {
    addFavoriteCity(city);
    setSearchText("");
  };

  return (
    <section>
      <div>
        <h2>Search Cities</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            required
          />

          <button>Search</button>
        </form>
      </div>
      <Modal closeModal={closeModal} showModal={showModal}>
        <div>
          {filteredCities.length === 0 ? (
            <p>There is no search result for {searchText}</p>
          ) : null}
          {filteredCities.map((_filteredCity) => (
            <div key={_filteredCity.city}>
              <p>{_filteredCity.city}</p>
              <Link to={`/weather-information/${_filteredCity.city}`}>
                See Weather Condition
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite(_filteredCity.city);
                }}
              >
                Add to Favorite
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addFavoriteCity: (city: string) => dispatch(addToFavoriteCity(city)),
  };
};

const connector = connect(undefined, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const SearchCities = connector(SearchCities_);
