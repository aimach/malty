import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../assets/css/all.css";
import BeerCard from "../components/BeerCard";

function All() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then(
      (response) =>
        response
          .json()
          .then((data) => setBeers(data))
          .catch((err) => console.error(err))
    );
  }, [page]);
  return (
    <div className="all-section">
      <Navbar />
      {beers.length &&
        beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)}
      <div className="button-section">
        {page > 1 && (
          <button type="button" onClick={() => setPage(page - 1)}>
            Previous
          </button>
        )}
        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default All;
