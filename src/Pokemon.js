import React, { useState } from "react";
import pokemon from "./Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pokemon = () => {
  const [index, setIndex] = useState(7);
  const { name, info, img, type } = pokemon[index];

  const checkNumber = (number) => {
    if (number > pokemon.length - 1) {
      return 0;
    }
    if (number < 0) {
      return pokemon.length - 1;
    }
    return number;
  };

  const prevPokemon = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPokemon = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPokemon = () => {
    let randomNumber = Math.floor(Math.random() * pokemon.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <div
        className="card container border-0"
        style={{ width: "18rem", background: "transparent" }}
      >
        <img
          src={img}
          className="card-img-top border border-dark rounded-circle shadow p-3 mb-3 bg-body rounded"
          alt={name}
        />
        <div className="card-body">
          <h4 className="card-title text-center">{name}</h4>
          <h5 className="card-title text-center text-capitalize fw-lighter">
            {type}
          </h5>
          <p className="card-text" style={{ textAlign: "justify" }}>
            {info}
          </p>
        </div>
        <div className="col align-items-center mt-2">
          <button className="btn col-6" onClick={prevPokemon}>
            <FaChevronLeft />
          </button>
          <button className="btn col-6" onClick={nextPokemon}>
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-outline-warning my-4"
          onClick={randomPokemon}
        >
          Suprise me!
        </button>
      </div>
    </>
  );
};

export default Pokemon;
