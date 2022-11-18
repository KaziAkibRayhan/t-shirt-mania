import React from "react";
import Anty from "../Anty/Anty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  const house = 7;
  const ring = "Diamond রিং";
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <section className="flex">
        <Father house={house} ring={ring}></Father>
        <Uncle house={house}></Uncle>
        <Anty house={house}></Anty>
      </section>
    </div>
  );
};

export default GrandPa;
