import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import './Occasions.css';

const Occasions = () => {
  const [occasionNumber, setOccasionNumber] = React.useState(0);
  const handleBack = () => {
    if (occasionNumber > 0) {
      setOccasionNumber(occasionNumber - 1);
    }
  };
  const handleForward = () => {
    if (occasionNumber < occasions.length - 1) {
      setOccasionNumber(occasionNumber + 1);
    }
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={8} className='occasions__left'>
          <img src={occasions[occasionNumber].image} alt="" />
        </Grid>
        <Grid item xs={12} md={4} className="occasions__right">
          <div>
            <IconButton
              disabled={occasionNumber === 0}
              onClick={() => handleBack()}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div>
            <h6>{occasions[occasionNumber].title}</h6>
            <h1>{occasions[occasionNumber].subtitle}</h1>
            <p>{occasions[occasionNumber].desc}</p>
            <button className="btn">
              {occasions[occasionNumber].buttonText}
            </button>
          </div>
          <div>
            <IconButton
              disabled={occasions.length - 1 === occasionNumber}
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

const occasions = [
  {
    index: 0,
    image:
      'https://floom.imgix.net/general/Mothers-Day-Hero-3.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=ca19459104d8962ac03ef4eb4b1d9162',
    title: 'Occasions',
    subtitle: "Mother's Day Flowers",
    desc: "Browse our florists' selection of beautiful mother's day bouquets and mother's day gifts.",
    buttonText: "Shop Mother's Day",
  },
  {
    index: 1,
    image:
      'https://floom.imgix.net/general/floom-valentines-hero_200205_153819.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=9e237a28d9e946f1c9085f1f7e7d180d',
    title: "Valentine's Gifts",
    subtitle: "Valentine's Flowers",
    desc: "Browse the highest quality and widest variety of uniquely curated valentine's flowers and flower arrangements.",
    buttonText: "Send Valentine's Flowers",
  },
  {
    index: 2,
    image:
      'https://floom.imgix.net/general/floom-birthday-category-hero-D_181113_123240.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=401ca87532b37d00f695c0d972498912',
    title: 'Occasion Flowers',
    subtitle: 'Birthday Flower Delivery',
    desc: 'Floom makes it fast, simple and painless to celebrate a birthday by sending beautiful, seasonal birthday flowers and plants from an independent&nbsp;florist.',
    buttonText: 'Send Birthday Flowers',
  },
  {
    index: 3,
    image:
      'https://floom.imgix.net/general/floom-plant-hero_180910_100846.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=a6018683b06229471cbe2f448f5542d7',
    title: 'Send Plants',
    subtitle: 'Plant Delivery',
    desc: "Send a succulent, cactus, orchid, or even all three. It couldn't be easier to get some plant life in your life with Floom.",
    buttonText: 'Send Plants',
  },
  {
    index: 4,
    image:
      'https://floom.imgix.net/general/floom-rose-hero_180625_105623.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=e88a8cd8f5c8a147c3bff8e739d8d467',
    title: 'Send Roses',
    subtitle: 'Rose Delivery',
    desc: 'Looking to send roses? Our florists have an array of traditional single stem red roses or an array of colours.',
    buttonText: 'Send Rose Flowers',
  },
];

export default Occasions;
