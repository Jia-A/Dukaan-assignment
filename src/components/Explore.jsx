import React from "react";
import "../styles/explore.css";
import "../custom.css";

function Explore() {
  return (
    <div className="mid-section">
      <div className="explore-cont flex between">
        <article className="exp-card">
          <img src="./assets/3.svg" alt="" className="icon-svg" />
          <h3 className="exp-head">Search</h3>
          <p className="exp-desc">
            Copy Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen
          </p>
        </article>
        <article className="exp-card">
          <img src="./assets/1.svg" alt="" className="icon-svg" />
          <h3 className="exp-head">Select</h3>
          <p className="exp-desc">
            Copy Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen
          </p>
        </article>
        <article className="exp-card">
          <img src="./assets/2.svg" alt="" className="icon-svg" />
          <h3 className="exp-head">Stand out</h3>
          <p className="exp-desc">
            Copy Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen
          </p>
        </article>
      </div>
    </div>
  );
}

export default Explore;
