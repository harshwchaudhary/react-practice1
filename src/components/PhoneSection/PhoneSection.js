import React from "react";
import "./PhoneSection.css";
import TextSection from "./TextSection";
const PhoneSection = () => {
  return (
    <>
      <TextSection />
      <section className="phoneSection">
        <img
          src={require("../../assets/images/onjuPhone.png")}
          alt="phoneSection"
          className="imgPhone"
        />
      </section>
    </>
  );
};

export default PhoneSection;
