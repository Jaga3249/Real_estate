import React from "react";
import "./Hero.css";
import { CiLocationOn } from "react-icons/ci";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" flexCenter innerWidth paddings hero-container ">
        {/* left-section */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </h1>
          </div>
          <div className=" flexColStart des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className=" flexCenter search-bar">
            <CiLocationOn color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter starts">
            <div className="flexColCenter start">
              <span>
                <CountUp start={8000} end={9000} duration={2.75} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter start">
              <span>
                <CountUp start={1900} end={2000} duration={2.75} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter start">
              <span>
                <CountUp start={20} end={28} duration={2.75} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* right-section */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
