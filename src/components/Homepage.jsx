import "../styles/homepage.css";
import "../custom.css";
import { sloganData } from "../sloganData";

function Homepage() {
  return (
    <article className="main-cont">
      <div className="main-div">
        <h2 className="slogan-head">Free slogan maker</h2>
        <p className="slogan-desc">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
        <label name="slogan-word" className="slogan-word">
          Word for your slogan
        </label>
        <div className="input-div">
          <input
            type="text"
            name=""
            className="slogan-inp"
            placeholder="cozy"
          />
          <button className="cross-btn">
            <img className="cross-icon" alt="" src="./assets/Union.png"></img>
          </button>
        </div>

        <button className="generate-btn">Generate slogans</button>
        <div className="section-parting"></div>
        <div className="flex between">
          <h5 className="result-head">
            We have generated 1023 slogans for "cozy"
          </h5>
          <button className="download-btn">Download all</button>
        </div>
        <div className="all-slogans">
          {sloganData.map((item) => (
            <div className="slogan-cont">{item.quote}</div>
          ))}
        </div>
        <div className="section-parting bottom"></div>
        <div className="pagination flex">
          <img src="./assets/Group 581.png" alt="" className="page-num" />
        </div>
      </div>
    </article>
  );
}

export default Homepage;
