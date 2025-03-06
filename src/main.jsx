import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import { useState } from "react";
import StarRating from "./StarRating";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Good", "Okay", "Awesome", "Fantastic"]}
    />
    <StarRating maxRating={6} color="red" defaultRating={3} />
    <Test />
    {/* <StarRating /> */}
  </StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}
