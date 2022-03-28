import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import './WhyContainer.css';
import { Link } from 'react-router-dom';

const WhyContainer = () => {
  return (
    <div className="whycontainer">
      <h1>Why send flowers with Floom?</h1>
      <div className="whycontainer__top">
        <div className="whycard">
          <img
            src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Flower-eye_180126_141515.gif"
            alt=""
          />
          <div>
            <h1>What you see is what you get</h1>
            <p>
              Love the bouquet on your screen? That's exactly what our local
              florist will prepare freshly for your order… or your money back!
            </p>
          </div>
        </div>
        <div className="whycard">
          <img
            src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Florist_180126_141526.gif"
            alt=""
          />
          <div>
            <h1>Always unique, never generic</h1>
            <p>
              We only work with the most talented and unique artisans, and we're
              passionate about supporting our skilled family of florists.
            </p>
          </div>
        </div>
        <div className="whycard">
          <img
            src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Hands_180126_141541.gif"
            alt=""
          />
          <div>
            <h1>Hand-delivered with care and attention</h1>
            <p>
              Each of our orders is professionally arranged, wrapped and safely
              delivered with a hand-written card… on the exact day that you need
              it.
            </p>
          </div>
        </div>
      </div>
      <p className="whycontainer__middle">
        Want to speak to us about flower delivery in your area? Call us: +44 (0)
        20 8068 7498 &nbsp;&nbsp;
        <PhoneIcon />
      </p>
      <div className="whycontainer__bottom">
        <p className="p-cap-head">FLOWER DELIVERY IN THE UNITED KINGDOM</p>
        <div>
          <ul>
            <li>
              <Link to="/">London</Link>
            </li>
            <li>
              <Link to="/">Cambridge</Link>
            </li>
            <li>
              <Link to="/">Brighton</Link>
            </li>
            <li>
              <Link to="/">Norwich</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Edinburgh</Link>
            </li>
            <li>
              <Link to="/">Aberdeen</Link>
            </li>
            <li>
              <Link to="/">Leeds</Link>
            </li>
            <li>
              <Link to="/">Newcastle</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Nottingham</Link>
            </li>
            <li>
              <Link to="/">Birmingham</Link>
            </li>
            <li>
              <Link to="/">Leicester</Link>
            </li>
            <li>
              <Link to="/">Sheffield</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Bristol</Link>
            </li>
            <li>
              <Link to="/">Cardiff</Link>
            </li>
            <li>
              <Link to="/">Liverpool</Link>
            </li>
            <li>
              <Link to="/">Manchester</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyContainer;
