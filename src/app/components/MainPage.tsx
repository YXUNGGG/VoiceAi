import React from "react";

import "../styles/MainPage.scss";

import logo from "../assets/main-page/logo.svg";
import wave from "../assets/main-page/waveform/wave.svg";
import redwave from "../assets/main-page/waveform/redwave.svg";
import micro from "../assets/main-page/waveform/micro.svg";
import redmicro from "../assets/main-page/waveform/redmicro.svg";
import rectangleBlock from "../assets/main-page/rectangle.png";

import mainDecor from "../assets/main-page/main-decoration.svg";
import firstDecor from "../assets/main-page/first_decoration.svg"
import secondDecor from "../assets/main-page/second-decoration.svg"
import thirdDecor from "../assets/main-page/third-decoration.svg"
import Button from "./Button";

const MainPage = () => {
  return (
  <>
    <img 
    src={firstDecor} 
    className="absolute-decor" 
    style={{top: "160px", right: "calc(20vw - 260px)"}} 
    alt="decor" />

    <img 
    src={secondDecor} 
    className="absolute-decor" 
    style={{top: "560px", left: "calc(20vw - 282px)"}}
    alt="decor" />

    <img 
    src={thirdDecor} 
    className="absolute-decor" 
    style={{bottom: "330px", right: "calc(20vw - 290px)"}}
    alt="decor" />

    <div className="container">
      <nav>
          <img src={logo} alt="logo" />
          <div className="nav-bar">
            <div>About me</div>
            <div>Pricing plans</div>
            <Button text="Sign in" />
          </div>
      </nav>

      <div className="main-title">
        <img src={mainDecor} className="main-decor" alt="decor" />

        <div className="title">
          <h1>Convert audio to text</h1>

          <p style={{marginBlock: "0 20px"}}>
            Upload or record your text message and recieve
            customisable conspect message in a minute
          </p>

          <div className="waveform">
            <div className="wave">
              <img src={wave} className="bg-wave" alt="pic" />
              <img src={redwave} className="redwave" alt="pic" />
            </div>

            <div className="micro">
              <img src={micro} alt="pic" />
              <img src={redmicro} className="redmicro" alt="pic" />
            </div>
          </div>
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
            <Button text="Start now"/>
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

              <div className="rank-circle">1</div>
            </div>
            
            <div className="block">
              <h4>Second Step</h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>

              <div className="rank-circle">2</div>
            </div>

            <div className="block">
              <h4>Third Step</h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>

              <div className="rank-circle">3</div>
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

              <div className="rank-circle">4</div>
            </div>
            
            <div className="final-step-wrapper">
              <img src={rectangleBlock} style={{width: "100%", height: "100%"}} alt="block" />
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

                <Button text="Try it for free" isFilled={false} />

                <div className="rank-circle">5</div>
              </div>
            </div>
          </div>
      </div>

      <h2>Pricing plans</h2>

      <div className="plans-container">
        <div className="price-plan">
          <div className="header">
            Primary <span>Free</span>
          </div>
          <div className="line" />
          <div className="content">
            <div className="option">
              <div className="dot" />
              First option
            </div>

            <div className="option">
              <div className="dot" />
              Second option
            </div>

            <div className="option disabled">
              <div className="dot" />
              Third option
            </div>

            <div className="option disabled">
              <div className="dot" />
              Fourth option
            </div>

            <div className="option disabled">
              <div className="dot" />
              Fifth option
            </div>
          </div>

            <div className="button-container">
              <Button isDisabled text="Current plan"/>
            </div>
        </div>

        <div className="price-plan">
          <div className="header">
            <div className="text-red">V.I.P</div>
            <span>29$/m</span>
          </div>

          <div className="line" />
          
          <div className="content">
            <div className="option">
              <div className="dot" />
              First option
            </div>

            <div className="option">
              <div className="dot" />
              Second option
            </div>

            <div className="option">
              <div className="dot" />
              Third option
            </div>

            <div className="option disabled">
              <div className="dot" />
              Fourth option
            </div>

            <div className="option disabled">
              <div className="dot" />
              Fifth option
            </div>
          </div>

          <div className="button-container">
            <Button text="Upgrade your plan"/>
          </div>
        </div>

        <div className="price-plan">
          <div className="header">
            <div className="text-red">Premium</div>
            <span>49$/m</span>
          </div>

          <div className="line" />

          <div className="content">
            <div className="option">
              <div className="dot" />
              First option
            </div>

            <div className="option">
              <div className="dot" />
              Second option
            </div>

            <div className="option">
              <div className="dot" />
              Third option
            </div>

            <div className="option">
              <div className="dot" />
              Fourth option
            </div>

            <div className="option">
              <div className="dot" />
              Fifth option
            </div>
          </div>

          <div className="button-container">
            <Button text="Upgrade your plan"/>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="line" />

        <div className="content">
          <img src={logo} alt="logo" />
          <div className="info">
            © ИП Десятков Арсений Александрович (ИНН 507461020277)
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default MainPage;