import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>
        <small>Ring: {house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Special;
