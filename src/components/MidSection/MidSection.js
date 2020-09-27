import React from "react";
import "./MidSection.css";
const MidSection = () => {
  return (
    <>
      <div className="MidSection">
        <p>BACKED BY THE BEST</p>

        <img
          src={require("../../assets/images/sequioa.png")}
          alt="sequioa"
          className="sequioa"
        />
        <img
          src={require("../../assets/images/polychain.png")}
          alt="polychain"
          className="polychain"
        />
        <img
          src={require("../../assets/images/consensys.png")}
          alt="consensys"
          className="consensys"
        />
        <section className="textMain">
          <p className="p1">Start saving for a rainy day fund</p>
          <p className="p2">
            Use Our Checking Account to Achieve Your Financial Goals
          </p>
          <p className="p3">
            With the latest Federal rate cut, the largest banks are offering
            close to 0% APY on their checking and savings accounts. OnJuno
            checking will earn you more than 20x the national average*. Deposits
            up to $250,000 are FDIC insured through our partner bank. Grow your
            idle money faster with our checking account and start saving towards
            a rainy day fund, big expense, or vacation.
          </p>
        </section>
        <img
          src={require("../../assets/images/perc.svg")}
          alt="Perc"
          className="perc"
        />
        <p className="p11">Sign up early to save more</p>
        <p className="p22">
          Depending on the level of your checking account, <br /> you’ll earn
          between 1.15%3 to 2.15%1 bonus rate.
        </p>
      </div>
    </>
  );
};

export default MidSection;
