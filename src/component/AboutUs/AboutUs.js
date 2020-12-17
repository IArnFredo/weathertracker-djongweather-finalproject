import React from 'react';

import './AboutUs.css';
import alvin from '../../assets/alvin.jpg';
import adriel from '../../assets/adriel.png';
import felix from '../../assets/felix.jpg';
import julius from '../../assets/julius.jpg';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';

function AboutUs() {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <section className="img-card-section">
            <img alt="background" className="img-card-style" src={adriel}></img>
          </section>
          <section className="name-card-section">
            Adriel Chandra
          </section>
          <section className="title-card-section">
            00000035715
          </section>
          <section className="social-card-section">
            <a href="https://www.instagram.com/kaita_2725/" target="_blank" rel="noopener noreferrer">
              <img alt="instagram" className="social-card-style" src={instagram}></img>
            </a>
            <a href="https://twitter.com/kai2725" target="_blank" rel="noopener noreferrer">
              <img alt="twitter" className="social-card-style" src={twitter}></img>
            </a>
            <a href="https://github.com/kaita2725" target="_blank" rel="noopener noreferrer">
              <img alt="github" className="social-card-style" src={github}></img>
            </a>
          </section>
        </div>

        <div className="card-container">
          <section className="img-card-section">
            <img alt="background" className="img-card-style" src={alvin}></img>
          </section>
          <section className="name-card-section">
            Alvin Martin Djong
          </section>
          <section className="title-card-section">
            00000035733
          </section>
          <section className="social-card-section">
            <a href="https://www.instagram.com/alvinmartin_d/" target="_blank" rel="noopener noreferrer">
              <img alt="instagram" className="social-card-style" src={instagram}></img>
            </a>
            <a href="https://twitter.com/alvin23482174" target="_blank" rel="noopener noreferrer">
              <img alt="twitter" className="social-card-style" src={twitter}></img>
            </a>
            <a href="https://github.com/alvinmdj" target="_blank" rel="noopener noreferrer">
              <img alt="github" className="social-card-style" src={github}></img>
            </a>
          </section>
        </div>

        <div className="card-container">
          <section className="img-card-section">
            <img alt="background" className="img-card-style" src={felix}></img>
          </section>
          <section className="name-card-section">
            Felix Ferdinand
          </section>
          <section className="title-card-section">
            00000035927
          </section>
          <section className="social-card-section">
            <a href="https://www.instagram.com/felferdinand/" target="_blank" rel="noopener noreferrer">
              <img alt="instagram" className="social-card-style" src={instagram}></img>
            </a>
            <a href="https://twitter.com/FelixFe31238436" target="_blank" rel="noopener noreferrer">
              <img alt="twitter" className="social-card-style" src={twitter}></img>
            </a>
            <a href="https://github.com/FelixFer" target="_blank" rel="noopener noreferrer">
              <img alt="github" className="social-card-style" src={github}></img>
            </a>
          </section>
        </div>

        <div className="card-container">
          <section className="img-card-section">
            <img alt="background" className="img-card-style" src={julius}></img>
          </section>
          <section className="name-card-section">
            Julius Alfredo
          </section>
          <section className="title-card-section">
            00000036372
          </section>
          <section className="social-card-section">
            <a href="https://www.instagram.com/alfred_oj/" target="_blank" rel="noopener noreferrer">
              <img alt="instagram" className="social-card-style" src={instagram}></img>
            </a>
            <a href="https://twitter.com/xamp27" target="_blank" rel="noopener noreferrer">
              <img alt="twitter" className="social-card-style" src={twitter}></img>
            </a>
            <a href="https://github.com/asadler-spec" target="_blank" rel="noopener noreferrer">
              <img alt="github" className="social-card-style" src={github}></img>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
