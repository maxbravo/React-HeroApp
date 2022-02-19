import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";

import queryString from "query-string"; //importo la nueva libreia para controlar query string

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search); // aqui se invoca al query con un parse y le mando el location.search

  const initialForm = {
    searchInput: q, //Nombre debe coincidir abajo y le estoy pasando el querystring pero podria ser cualquier cosa
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { searchInput } = formValues;

  const heroResults = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchInput}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              name="searchInput" //el mismo nombre
              autoComplete="off"
              value={searchInput} //el mismo nombre
              onChange={handleInputChange} //llamo a la función del Change
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Search results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Enter a hero to seach</div>
          ) : (
            heroResults.length === 0 && (
              <div className="alert alert-danger">
                There is no result for your search with the values: {q}
              </div>
            )
          )}

          {heroResults.map(
            (
              hero //reutilizo el componente de HeroCard
            ) => (
              <HeroCard key={hero.id} {...hero} /> // le paso el objeto desestructurado
            )
          )}
        </div>
      </div>
    </>
  );
};
