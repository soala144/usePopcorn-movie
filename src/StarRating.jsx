import React from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const StarContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
const StarRating = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>{maxRating}</p>
    </div>
  );
};

export default StarRating;
