import React from "react";
import "./SearchPhotos.css"

function SearchPhotos() {
  return (
    <div className="search-container">
      <div className="search-item"></div>
      <input
        type="text"
        name="query"
        className="search-input"
        placeholder="Search free high-resolution photos"
      ></input>
    </div>
  );
}

export default SearchPhotos;
