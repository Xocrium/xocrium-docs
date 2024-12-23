import React from "react";
import "./index.css";

const Homepage: React.FC = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="div-navbar">
        <section className="section-navbar">
          <nav className="navbar">
            <ul className="navbar-links">
              <div className="navbar-logo"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               className="navbar-logo-image"
               preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
              fill="#FFF" stroke="none">
              <path d="M3755 5346 l-25 -25 0 -825 c0 -522 4 -834 10 -851 17 -46 65 -57
              219 -53 103 4 150 10 194 25 162 57 283 208 303 376 10 81 -1 87 -145 87 -78
              0 -121 4 -129 12 -9 9 -12 111 -12 398 0 443 -2 434 84 459 35 10 50 20 57 40
              6 14 9 91 7 173 -3 146 -3 148 -31 175 l-27 28 -240 3 -240 3 -25 -25z"/>
              <path d="M4855 5360 c-96 -24 -200 -96 -263 -182 -54 -73 -72 -129 -72 -220
              l0 -77 34 -6 c18 -4 132 -5 252 -3 248 4 265 8 348 91 75 75 89 115 94 253 5
              163 16 154 -196 153 -92 -1 -180 -5 -197 -9z"/>
              <path d="M4381 4671 c-27 -27 -34 -76 -28 -189 7 -136 6 -135 83 -127 70 8
              145 -5 209 -35 88 -42 175 -151 175 -220 l0 -30 -78 0 c-47 0 -83 -5 -90 -12
              -8 -8 -12 -60 -12 -170 0 -151 1 -160 24 -197 31 -49 69 -78 115 -90 28 -7
              293 -8 433 -2 10 1 24 14 33 31 12 24 15 74 15 277 -1 308 -12 366 -97 495
              -87 132 -236 238 -385 273 -42 10 -116 15 -220 15 -143 0 -160 -2 -177 -19z"/>
              </g>
              </svg></div>
              <li><a href="/docs/install">Install<kdb>I</kdb></a></li>
              <li><a href="#">Libraries</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
            <div className="navbar-buttons">
              <button className="navbar-button-secondary"><div className="button-content"><i className="fa-brands fa-github github-icon" />Github<kdb>G</kdb></div></button>
              { /* <button className="navbar-button-secondary"><div className="button-content">Sign/Log In<kdb>L</kdb></div></button> */ }
              <button className="navbar-button-primary"><div className="button-content">Download<kdb>D</kdb></div></button>
            </div>
          </nav>
          <div className="trapezoid trapez-left shadow"></div>
          <div className="trapezoid trapez-right shadow"></div>
        </section>
      </div>
      <div className="div-release">
        <section className="section-release">
          <button className="release-button">
            <i className="fa-regular fa-newspaper release-icon"></i>Version 0.1.1 out!
          </button>
          <div className="trapezoid trapez-left"></div>
          <div className="trapezoid trapez-right"></div>
        </section>
      </div>

      {/* Main Content */}
        <div className="div-header">
          <section className="section-header">
            <h1 className="header-title">The Kvexium Compiler</h1>
            <p className="header-subtitle">
              For an innovative and everytime interesting <br/>
              coding experience.
              <p>
                <div className="main-buttons">
                  <button className="navbar-button-primary"><div className="button-content"><i className="fa-solid fa-angles-down button-icon"></i>Download now<kdb>D</kdb></div></button>
                  <button className="navbar-button-secondary"><div className="button-content"><i className="fa-brands fa-github button-icon"></i>Github<kdb>G</kdb></div></button>
                </div>
              </p>
              <p className="availability"><i className="fa-brands fa-linux"></i> <i className="fa-brands fa-apple"></i> <i className="fa-brands fa-windows"></i>&ensp;Available for Linux, and soon for Windows and macOS</p>
            </p>
            <div className="trapezoid trapez-left"></div>
            <div className="trapezoid trapez-right"></div>
          </section>
        </div>


      {/* Features */}
      <div className="div-features">
        <section className="section-features">
          <div className="features-content">
            <div className="feature dashed-border-right">
              <h3><i className="fa-brands fa-leanpub feature-icon"></i> Easy to Learn</h3>
              <p>
                Written from scratch in Rust to efficiently leverage multiple CPU
                cores and your GPU.
              </p>
            </div>
            <div className="feature dashed-border-right">
              <h3><i className="fa-solid fa-hand-sparkles feature-icon"></i> Innovation</h3>
              <p>
                Integrate upcoming LLMs into your workflow to generate, transform,
                and analyze code.
              </p>
            </div>
            <div className="feature">
              <h3><i className="fa-solid fa-graduation-cap feature-icon"></i> Fast</h3>
              <p>
                Written in Go, the Kvexium compiler is actually pretty fast.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
