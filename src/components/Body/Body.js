import React, { useState } from "react";
import "./Body.css";
export default function Body() {
  const [learnMore, setLearnMore] = useState(false);
  function show() {
    setLearnMore(true);
  }
  function hide() {
    setLearnMore(false);
  }
  return (
    <div className="main-container">
      <div className="image-container">
        <div className="shop-btn">Shop All</div>
      </div>
      <div className="real-data">
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
        <div className="item-container">
          <img
            src="https://cdn.wallpapersafari.com/62/95/zkSBYe.jpg"
            alt="product"
            className="image-of-item"
          />
        </div>
      </div>
      <div className="img2"></div>
      <div className="yellow-ani-container">
        <div className="circle-container"></div>
        <div className="content">
          <div className="content1"></div>
          <div className="content1-data">
            <h2>We're not about pseudoscience and half-truths</h2>
            <span>
              From Omega-3 DHA from microalgae to regeneratively-farmed pea
              protein, our scientists studied diets and genetics to make daily
              essentials based on what we need.
            </span>
            <div className="hover-blur">Who We Are</div>
          </div>
        </div>
        <div className="content">
          <div className="content1-data">
            <h2>You deserve traceability</h2>
            <span>
              We share our sources, studies, and suppliers — daily essentials
              backed by the first visible supply chain of its kind.
            </span>
            <div className="hover-blur">Meet Our Ingredients</div>
            <div className="hover-blur">Our Clinical Study</div>
          </div>
          <div className="content2"></div>
        </div>
        <div className="featured-products">
          <div className="heading-featured">
            <h1>Featured Products</h1>
            <span className="hover-blur">Shop All</span>
          </div>
          <div className="fetured-images">
            <div className="qwerty">
              <div
                className="hover-change-image"
                onMouseOver={show}
                onMouseLeave={hide}
              >
                {learnMore ? (
                  <div className="learn-more-hover">Learn More</div>
                ) : null}
              </div>
              <div>
                <span style={{ fontStyle: "italic" }}>Essential for Women</span>
                <h4>Multivitamin 18+</h4>
                <span>
                  The clinical-backed multivitamin, reimagined for women 18+.
                </span>
              </div>
            </div>
            <div className="qwerty">
              <div
                className="hover-change-image"
                onMouseOver={show}
                onMouseLeave={hide}
              >
                {learnMore ? (
                  <div className="learn-more-hover">Learn More</div>
                ) : null}
              </div>
              <div>
                <span style={{ fontStyle: "italic" }}>Essential for Women</span>
                <h4>Multivitamin 18+</h4>
                <span>
                  The clinical-backed multivitamin, reimagined for women 18+.
                </span>
              </div>
            </div>
            <div className="qwerty">
              <div
                className="hover-change-image"
                onMouseOver={show}
                onMouseLeave={hide}
              >
                {learnMore ? (
                  <div className="learn-more-hover">Learn More</div>
                ) : null}
              </div>
              <div>
                <span style={{ fontStyle: "italic" }}>Essential for Women</span>
                <h4>Multivitamin 18+</h4>
                <span>
                  The clinical-backed multivitamin, reimagined for women 18+.
                </span>
              </div>
            </div>
            <div className="qwerty">
              <div
                className="hover-change-image"
                onMouseOver={() => {
                  show();
                }}
                onMouseLeave={() => {
                  hide();
                }}
              >
                {learnMore ? (
                  <div className="learn-more-hover">Learn More</div>
                ) : null}
              </div>
              <div>
                <span style={{ fontStyle: "italic" }}>Essential for Women</span>
                <h4>Multivitamin 18+</h4>
                <span>
                  The clinical-backed multivitamin, reimagined for women 18+.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
