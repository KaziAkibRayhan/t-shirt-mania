import React from "react";
import Anty from "../Anty/Anty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <section className="flex">
        <Father></Father>
        <Uncle></Uncle>
        <Anty></Anty>
      </section>
    </div>
  );
};

export default GrandPa;
