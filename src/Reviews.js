import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import './Reviews.css';

const Reviews = () => {
  const [reviewNumber, setreviewNumber] = React.useState(0);
  const handleBack = () => {
    if (reviewNumber > 0) {
      setreviewNumber(reviewNumber - 1);
    }
  };
  const handleForward = () => {
    if (reviewNumber < reviews.length - 1) {
      setreviewNumber(reviewNumber + 1);
    }
  };
  return (
    <Box className="reviews">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} className="reviews__left">
          <h1>Hear what our happy customers have to say</h1>
          <div className="reviewsLeft__box">
            <div className="reviewsLeftBox__top">
              <span>Floom on&nbsp;</span>
              <img
                src="https://d34g78fsj6jubz.cloudfront.net/images/reviews-logo.svg"
                alt=""
              />
            </div>
            <div className="reviewsLeftBox__bottom">
              <div>
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </div>
              <p>4.49 from 16004 reviews</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} className="reviews__right">
          <div>
            <IconButton
              disabled={reviewNumber === 0}
              onClick={() => handleBack()}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div className="reviewRight__content">
            <div>
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
            </div>
            <p>{reviews[reviewNumber].desc}</p>
            <p>{reviews[reviewNumber].name}</p>
          </div>
          <div>
            <IconButton
              disabled={reviews.length - 1 === reviewNumber}
              onClick={() => handleForward()}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

const reviews = [
  {
    desc: '"Floom has been really helpful in making a couple of changes to this order. I would definitely recommend them to friends and family. Thanks very much"',
    name: 'Michael',
  },
  {
    desc: '"Beautiful bouquet that looked exactly like the picture - very pleased with the quick delivery too"',
    name: 'Kate',
  },
  {
    desc: '"Great site on which to find different styles/florists! Next day delivery awesome!"',
    name: 'Susan',
  },
];

export default Reviews;
