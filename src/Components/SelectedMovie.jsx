import React from "react";

const SelectedMovie = ({ selectedId, onCloseMovie }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default SelectedMovie;
