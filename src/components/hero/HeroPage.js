import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]); //memorizo el valor y cambia solo ante cambio del heroId

  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1); // regresa a la página anterior
  };
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const imagePath = heroImages(`./${id}.jpg`); //utilizo el componente del webpackage para traer la imagen
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flash">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
};
