import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import './Tips.css';

const Tips = () => {
  const [tipNumber, setTipNumber] = React.useState(0);
  const handleBack = () => {
    if (tipNumber > 0) {
      setTipNumber(tipNumber - 1);
    }
  };
  const handleForward = () => {
    if (tipNumber < tips.length - 1) {
      setTipNumber(tipNumber + 1);
    }
  };
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          className="tips__left"
          order={{ xs: 2, md: 1 }}
        >
          <div>
            <IconButton disabled={tipNumber === 0} onClick={() => handleBack()}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div>
            <h6>Tips &#38; Tricks</h6>
            <h1>{tips[tipNumber].title}</h1>
            <p>{tips[tipNumber].desc}</p>
            <button className="btn">Read Tips</button>
          </div>
          <div>
            <IconButton
              disabled={tips.length - 1 === tipNumber}
              onClick={() => handleForward()}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }} className='tips__right'>
          <img src={tips[tipNumber].image} alt={tips[tipNumber].title} />
        </Grid>
      </Grid>
    </Box>
  );
};

const tips = [
  {
    index: 0,
    image:
      'https://floom.imgix.net/general/floom-flower-life-hero.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=4d67b39c4707088b7015f7e3f9de1be3',
    title: 'How to make your bouquet last longer',
    desc: 'Consider Floom your Agony Aunt for all things botanical - here are the expert tips you need to extend the lifetime of your beloved stems',
  },
  {
    index: 1,
    image:
      'https://floom.imgix.net/general/floom-potm-monstera.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=d78241709472b481e8f8c75d2e70a5f3',
    title: 'How to propagate your plants',
    desc: 'How to propagate a Monstera deliciosa one of the most Instagrammed of houseplants',
  },
  {
    index: 2,
    image:
      'https://floom.imgix.net/general/floom-fotm-zinnia-hero_180831_145657.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=243c91f88dc23113b30c05ee92c202a5',
    title: 'Birth Month Flowers',
    desc: 'Take a look at our month-by-month guide to the different birth flowers - and their symbolism - so you can send a meaningful celebratory bouquet.',
  },
];

export default Tips;
