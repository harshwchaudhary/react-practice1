import React from "react";
import "./CardSection.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
const CardSection = () => {
  return (
    <>
      <div id="boxMain">
        <div className="leftBox">
          <div className="inleftBox">
            <img
              src={require("../../assets/images/BlackCard.png")}
              alt="blackCard"
            />
            <p className="ip1">
              <span id="metal">METAL</span>
            </p>
            <p className="ip2">
              <span id="perc">
                2.15%<sup id="sup1">1</sup>
              </span>
            </p>
            <p className="ip3">
              <span id="cash">5%</span> cash back
            </p>
            <div className="barProg">
              <p>
                <span id="p223">
                  <span id="id223">2223</span>/2500 spots
                </span>
              </p>
              <p>
                <span id="p277">277 spots left</span>
              </p>
              <ProgressBar now={80} />
              <Button variant="primary">Sign Up Now</Button> <hr></hr>
              <p id="include">INCLUDES</p>
              <img
                src={require("../../assets/images/Tick.png")}
                alt="tick"
                className="img1"
              />
              <img
                src={require("../../assets/images/Tick.png")}
                alt="tick"
                className="img2"
              />
              <img
                src={require("../../assets/images/Tick.png")}
                alt="tick"
                className="img3"
              />
              <img
                src={require("../../assets/images/Tick.png")}
                alt="tick"
                className="img4"
              />
              <img
                src={require("../../assets/images/Tick.png")}
                alt="tick"
                className="img5"
              />
              <div id="pMain">
                <p>Charcoal Black Metal Card</p>
                <p>
                  2.15%<sup>1</sup> Bonus Rate Checking Account
                </p>
                <p>5% Cash back on brands you love</p>
                <p>Free Cash Withdrawals</p>
                <p>Phone & Chat Support</p>
              </div>
              <p id="idFund">
                Fund your account with a minimum opening deposit of $1000. 3
                additional free ATM withdrawals per month from out of network
                ATMs.
              </p>
            </div>
            <div id="greenPart">
              <img
                src={require("../../assets/images/dollar.png")}
                alt="dollar"
              />
              <p id="member">$11.99/m Membership Fee</p>
              <p id="free">Free for 6 months</p>
              <p id="savings">~$72 Savings</p>
            </div>
          </div>
        </div>

        <div className="midBox">
          <div className="inleftBox">
            <img
              src={require("../../assets/images/PinkCard.png")}
              alt="blackCard"
            />
            <p className="ip1">
              <span id="metal">PREMIUM</span>
            </p>
            <p className="ip2">
              <span id="percMid">
                1.65%<sup id="supMid">2</sup>
              </span>
            </p>
            <p className="ip3">
              <span id="cashMid">4%</span> cash back
            </p>
            <div className="barProg">
              <p>
                <span id="p223">
                  <span id="id223Mid">2000</span>
                </span>
              </p>
              <p>
                <span id="p277Mid">2000 spots left</span>
              </p>
              <ProgressBar now={0} />
              <Button variant="primary" className="butMid" disabled>
                Up Next
              </Button>{" "}
              <hr></hr>
              <p id="include">INCLUDES</p>
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img1"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img2"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img3"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img4"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img5"
              />
              <div id="pMain">
                <p>Free Debit Card</p>
                <p>
                  1.65%<sup>2</sup>Bonus Rate Checking Account
                </p>
                <p>4% Cash back on brands you love</p>
                <p>Free Cash Withdrawals</p>
                <p>Phone & Chat Support</p>
              </div>
              <p id="idFund">
                Fund your account with a minimum opening deposit of $500. 2
                additional free ATM withdrawals per month from out of network
                ATMs.
              </p>
            </div>
            <div id="greyPart">
              <p id="Fee">$6.99/m Membership Fee</p>
              <p id="Soon">Coming Soon</p>
            </div>
          </div>
        </div>
        <div className="rightBox">
          {" "}
          <div className="inleftBox">
            <img
              src={require("../../assets/images/BlueCard.png")}
              alt="blueCard"
            />
            <p className="ip1">
              <span id="metal">BASIC</span>
            </p>
            <p className="ip2">
              <span id="percMid">
                1.15%<sup id="supMid">3</sup>
              </span>
            </p>
            <p className="ip3">
              <span id="cashMid">3%</span> cash back
            </p>
            <div className="barProg">
              <p>
                <span id="p223">
                  <span id="id223Mid">10000</span>
                </span>
              </p>
              <p>
                <span id="p277Mid">10000 spots left</span>
              </p>
              <ProgressBar now={0} />
              <Button variant="primary" className="butMid" disabled>
                Coming Soon
              </Button>{" "}
              <hr></hr>
              <p id="include">INCLUDES</p>
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img1"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img2"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img3"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img4"
              />
              <img
                src={require("../../assets/images/tickGrey.png")}
                alt="tick"
                className="img5"
              />
              <div id="pMain">
                <p>Free Debit Card</p>
                <p>
                  1.15%<sup>3</sup>Bonus Rate Checking Account
                </p>
                <p>3% Cash back on brands you love</p>
                <p>Free Cash Withdrawals</p>
                <p>Phone & Chat Support</p>
              </div>
              <p id="idFund">
                Fund your account with a minimum opening deposit of $0.
              </p>
            </div>
            <div id="greyPart">
              <p id="Fee">No Membership Fee</p>
              <p id="Soon">Free Forever!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
