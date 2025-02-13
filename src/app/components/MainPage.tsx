import React from "react";

import "../styles/MainPage.scss";
import logo from "../assets/logo.svg";
import mainDecor from "../assets/main-decoration.svg";
import waveformDecor from "../assets/waveform-decor2.svg";
import rectangleBlock from "../assets/recStep.svg";

const MainPage = () => {
  return (
    <div className="container">
      <nav>
        <img src={logo} alt="logo" />
        <div className="nav-bar">
          <div>About me</div>
          <div>Pricing plans</div>
          <button>Sign in</button>
        </div>
      </nav>

      <div className="main-title">
        <img src={mainDecor} alt="decor" />
        <div className="title">
          <h1>Convert audio to text</h1>
          <img src={waveformDecor} alt="decor" />
        </div>
      </div>

      <div className="target-blocks">
        <div className="block">
          <h4>Start now</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Start now</button>
        </div>
      </div>

      <h2>How it works?</h2>

      <div className="steps-block">
        <div className="blocks-row">
          <div className="block">
            <h4>First Step</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor.
            </p>

            <div className="rang-circle">1</div>
          </div>
          

          <div className="block">
            <h4>Second Step</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor.
            </p>

            <div className="rang-circle">2</div>
          </div>

          <div className="block">
            <h4>Third Step</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor.
            </p>

            <div className="rang-circle">3</div>
          </div>
        </div>

        <div className="blocks-row">
          <div className="block" style={{height: "250px"}}>
            <h4>Fourth Step</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>

            <div className="rang-circle">4</div>
          </div>
          
          <div className="final-step-wrapper">
            <img src={rectangleBlock} alt="block" />
            <div className="content">
              <h4>Fifth Step</h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident.
              </p>

              <button>Try it for free</button>

              <div className="rang-circle">5</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Pricing plans</h2>

      <div className="plans-container">
        <div className="price-plan">
          <div className="header">
            Primary <div className="price">Free</div>
          </div>
          <div className="line"></div>
          <div className="content">
            <div className="option">
              <div className="dot"></div>
              First option
            </div>

            <div className="option">
              <div className="dot"></div>
              Second option
            </div>

            <div className="option disabled">
              <div className="dot"></div>
              Third option
            </div>
          </div>
        </div>
        <div className="price-plan"></div>
        <div className="price-plan"></div>
      </div>
    </div>
  );
}

export default MainPage;