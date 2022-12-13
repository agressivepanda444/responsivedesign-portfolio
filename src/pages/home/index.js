import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Chinatown from "../../assets/images/Chinatown.png"
import Balsamiq from "../../assets/images/balsamiq.png"
import Redesign from "../../assets/images/Redesign.png"

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <img src={Chinatown} alt="Chinatown" width="500" height="600" />
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p className="mb-1x">{introdata.issuesone}</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p className="mb-1x">{introdata.issuestwo}</p>
                <img src={Balsamiq} alt="balsamiq" width="500" height="600" />
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p className="mb-1x">{introdata.balsamiq}</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <img src={Redesign} alt="redesign" width="500" height="600" />
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <p className="mb-1x">{introdata.closer} <a href="https://agressivepanda444.github.io/responsivedesign/">here</a></p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
