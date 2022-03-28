import React from 'react';
import './Footer.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="footer__email">
            <p className="p-cap-head">SIGNUP TO OUR NEWSLETTER</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="name@address.com"
              className="input-field"
            />
            <button type="submit" className="btn">
              Enter Email
            </button>
          </div>
        </Grid>
        <Grid item xs={12} md={8} className="footer__links">
          <Grid item xs={12} className="footerLinks__top">
            <Link to="/" className="p-cap-head">
              SHOP
            </Link>
            <Link to="/" className="p-cap-head">
              MAGAZINE
            </Link>
            <Link to="/" className="p-cap-head">
              CONTACT US
            </Link>
            <Link to="/" className="p-cap-head">
              ABOUT US
            </Link>
            <Link to="/" className="p-cap-head">
              MY ACCOUNT
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinks__bottom">
            <div className="footerBottom__columns footerBottomColumns--padding">
              <div>
                <ul>
                  <li>
                    <Link to="/">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/">Returns and refunds</Link>
                  </li>
                  <li>
                    <Link to="/">Work at Floom</Link>
                  </li>
                  <li>
                    <Link to="/">Want to sell on Floom</Link>
                  </li>
                  <li>
                    <Link to="/">Merch</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Acceptance Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerBottom__columns">
              <div>
                <ul>
                  <li>
                    <Link to="/">Join our Affiliates</Link>
                  </li>
                  <li>
                    <Link to="/">Corporate Flowers</Link>
                  </li>
                  <li>
                    <Link to="/">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="/">Find an Artisan</Link>
                  </li>
                  <li>
                    <Link to="/">Refer a friend</Link>
                  </li>
                </ul>
              </div>
              <div className="footerBottom__icons">
                <Link to="/">
                  <FacebookIcon />
                </Link>
                <Link to="/">
                  <InstagramIcon />
                </Link>
                <Link to="/">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div className="footerBottom__places">
        <span>Aberdeen</span> <span>Brighton</span> <span>Birmingham</span>
        <span>Bristol</span> <span>Cardiff</span> <span>Chester</span>
        <span>Edinburgh</span>
        <span>Essex</span> <span>Huddersfield</span> <span>Leeds</span>
        <span>Liverpool</span> <span>London</span> <span>Manchester</span>
        <span>Nottingham</span> <span>Newcastle</span> <span>Scotland</span>
        <span>Wales</span>
        <span>Christmas</span>
        <span>Valentine's Day Flowers</span> <span>Father's Day</span>
        <span>Mother's Day</span>
      </div>
      <div className="footerBottom__copyright">
        <img src={logo} alt="Floom Logo" />
        <p>&copy; 2022 / FLOOM. LTD / ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
