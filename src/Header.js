import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import home from './home.svg';
import marker from './marker.svg';
import StarIcon from '@mui/icons-material/Star';
import './Header.css';

const Header = () => {
  return (
    <Box className="header">
      <Grid container>
        <Grid item xs={12} md={8} className="header__one">
          <div>
            <h1>Flower delivery from independent florists in the U.K.</h1>
            <div className="headerOne__input">
              <img src={home} alt="" />
              <input type="text" name="" id="" placeholder="Postcode" />
              <img src={marker} alt="" />
              <select name="delivery" id="delivery">
                <option value="all">Anytime</option>
                <option value="27/03/2022">Today</option>
                <option value="28/03/2022">Tomorrow</option>
                <option value="29/03/2022">Tue 29th</option>
                <option value="30/03/2022">Wed 30th</option>
                <option value="31/03/2022">Thu 31st</option>
                <option value="01/04/2022">Fri 1st Apr</option>
                <option value="02/04/2022">Sat 2nd Apr</option>
                <option value="03/04/2022">Sun 3rd Apr</option>
                <option value="04/04/2022">Mon 4th Apr</option>
                <option value="05/04/2022">Tue 5th Apr</option>
              </select>
              <button className="btn">Send flowers</button>
            </div>
            <div className="headerOne__reviews">
              <StarIcon
                fontSize="small"
                style={{ color: 'rgba(255, 149, 41, 0.5)' }}
              />
              <StarIcon
                fontSize="small"
                style={{ color: 'rgba(255, 149, 41, 0.5)' }}
              />
              <StarIcon
                fontSize="small"
                style={{ color: 'rgba(255, 149, 41, 0.5)' }}
              />
              <StarIcon
                fontSize="small"
                style={{ color: 'rgba(255, 149, 41, 0.5)' }}
              />
              <StarIcon
                fontSize="small"
                style={{ color: 'rgba(255, 149, 41, 0.5)' }}
              />
              <span>16004 reviews</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} className="header__two">
            <div>
              <p>Collection</p>
              <h1>Mother's Day Flowers</h1>
              <Link to="/">Send Flowers</Link>
            </div>
          </Grid>
          <Grid item xs={12} className="header__three">
            <div>
              <p>Collection</p>
              <h1>Birthday Flowers</h1>
              <Link to="/">Send Flowers</Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
