import React, { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const RingContext = createContext("Matir Ring");

const GrandPa = () => {
  // const ring = "Diamond রিং";
  const [house, setHouse] = useState(1);

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h2>GrandPa</h2>
        <section className="flex">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Anty house={house}></Anty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
