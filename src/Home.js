import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Reviews from './Reviews';
import Occasions from './Occasions';
import Tips from './Tips';
import About from './About';
import Footer from './Footer';
import WhyContainer from './WhyContainer';
import './Home.css';
import ImageCarousel from './ImageCarousel';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <h1>Send Flowers</h1>
      <ImageCarousel title={"Mother's Day Flowers"} row={imageCarouselRow1} />
      <ImageCarousel title={'Best Selling Flowers'} row={imageCarouselRow2} />
      <ImageCarousel title={'Spotlight'} row={imageCarouselRow3} />
      <Reviews />
      <Occasions />
      <WhyContainer />
      <Tips />
      <About />
      <Footer />
    </div>
  );
};

const imageCarouselRow1 = [
  {
    index: 0,
    image:
      'https://floom.imgix.net/products/fdcbc945-c6a1-496b-a059-adcc7b8777d1.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=1a131681d657ed57bd46b1c0bcf2e1b4',
    name: 'Knipton',
    florist: "Spohie's Flower Company",
    price: '$48.00 - $60.00',
  },
  {
    index: 1,
    image:
      'https://floom.imgix.net/products/5dca571c-9f46-4d2c-bb1e-2ddea1b1c453.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=2fc1c5a56258939ee1577d10ae2ebdb9',
    name: 'Hazel',
    florist: 'Seasons Florist',
    price: '$70.00',
  },
  {
    index: 2,
    image:
      'https://floom.imgix.net/products/%EF%B8%8F-fire-starter-1/floom-verdure-florist-manchester-orchid-1.jpg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=97369ba7ee4f721842a341ace47f6a06',
    name: 'Opulent Orchids',
    florist: 'Verdure Floral Design',
    price: '$60.00 - $110.00',
  },
  {
    index: 3,
    image:
      'https://floom.imgix.net/products/8db7da57-4757-4e97-b7db-7bf0689378e0.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=f08a476adf2735c2f12505162a67f717',
    name: 'Catrin',
    florist: 'Pick a Lily Florist',
    price: '$50.00',
  },
  {
    index: 4,
    image:
      'https://floom.imgix.net/products/96ed328e-04dd-46e9-9077-b549ed86d3ea.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=cd1f2ccabdb060b33cbf8d5e27ab64e3',
    name: 'Bella Bouquet',
    florist: 'Botanique Workshop',
    price: '$55.00 - $85.00',
  },
  {
    index: 5,
    image:
      'https://floom.imgix.net/products/f7282c97-b21a-4c0b-85b6-e93436dc6ee0.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=b98c2a1a97799a6b5782dacd856a4e20',
    name: 'Tuplip Cloud Bouquet',
    florist: 'The Bloom Foundry',
    price: '$50.00 - $75.00',
  },
  {
    index: 6,
    image:
      'https://floom.imgix.net/products/63522496-bb43-4124-b7ed-3d2e5b281494.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=fb91f6e1274c5eb6644385df0933bb55',
    name: 'Summer Breeze',
    florist: 'Amadeus',
    price: '$60.00',
  },
  {
    index: 7,
    image:
      'https://floom.imgix.net/products/583117f5-2091-41a0-9eb3-c598e2605026.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=3cc54b07f4e95aa6aad5ecfb33116054',
    name: 'Rock With You',
    florist: 'Floom Collection',
    price: '$35.00 - $110.00',
  },
];
const imageCarouselRow2 = [
  {
    index: 0,
    image:
      'https://floom.imgix.net/products/passion/floom-clapham-flowers-summer-collection-9.jpg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=76c74b4073f49d31d43ff5cd21ed3cda',
    name: 'Passion',
    florist: 'Clapham Flowers',
    price: '$60.00 - $100.00',
  },
  {index: 1,
    image:
      'https://floom.imgix.net/products/583117f5-2091-41a0-9eb3-c598e2605026.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=3cc54b07f4e95aa6aad5ecfb33116054',
    name: 'Rock With You',
    florist: 'Flower Folk',
    price: '$48.00',
  },
  {
    index: 2,
    image:
      'https://floom.imgix.net/products/medium-alnmouth/floom-the-flower-folk-florist-launch-collection-20.jpg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=d90d6513c8a605b232fa8707221210fe',
    name: 'Medium Alnmouth',
    florist: 'Your Flower Story',
    price: '$129.00',
  },
  {
    index: 3,
    image:
      'https://floom.imgix.net/products/11431fb4-40ea-48ca-a804-d2def3e658f9.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=d361c0f888754120d63bb10b488a5e44',
    name: 'Wild Garden',
    florist: 'Fabbienne Egger Flowers',
    price: '$69.00 - $250.00',
  },
  {
    index: 4,
    image:
      'https://floom.imgix.net/products/b58f7d89-0913-4999-84eb-0611bd8bf948.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=6b86dfefddd29deb04bf788f8b11d6f7',
    name: 'Annabelle',
    florist: 'The Flower Boutique',
    price: '$45.00 - $85.00',
  },
  {
    index: 5,
    image:
      'https://floom.imgix.net/products/63ce3dc5-9ab5-4a91-8e55-5fe339c83636.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=6a447dfe21603694f0d74d1b999aa5f5',
    name: 'Austen Basket',
    florist: 'Debbie Western Flowers',
    price: '$85.00',
  },
  {
    index: 6,
    image:
      'https://floom.imgix.net/products/pink-fizz/debbie-western-flowers-london-summer-32.jpg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=0d923d26cf5de283118e4d739eedd39c',
    name: 'Pink Gin Fizz',
    florist: 'Verdure Floral Design',
    price: '$50.00 - $100.00',
  },
  {
    index: 7,
    image:
      'https://floom.imgix.net/products/%EF%B8%8F-fire-starter-1/floom-verdure-florist-manchester-mothers-day-3043.jpg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=188719df39a8205dde3adbbfa0cc2a5d',
    name: "Mother's Joy",
    florist: 'Verdure Floral Design',
    price: '$50.00 - $100.00',
  },
];
const imageCarouselRow3 = [
  {
    index: 0,
    image:
      'https://floom.imgix.net/products/73e24a3a-c066-4a96-8e51-77264a84d3c9.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=9ab4dc63ff3cbd879006b1be6e6ace85',
    name: 'Summer Love',
    florist: 'Krystle Flower Design',
    price: '$70.00',
  },
  {
    index: 1,
    image:
      'https://floom.imgix.net/products/9bc20fc9-f772-4078-8733-529bb1ae991f.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=bd63b8381321180b0e2faa50871496b9',
    name: 'Red Rose and Pussy Will',
    florist: 'Krystle Flower Design',
    price: '$70.00',
  },
  {
    index: 2,
    image:
      'https://floom.imgix.net/products/12f057cf-ea2b-4e7e-a480-04c3cc354ec7.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=97f1b9fd8bae310e5d8d019c1fab612e',
    name: 'Wild and Pretty',
    florist: "Pink's Florist",
    price: '$54.99 - $142.99',
  },
  {
    index: 3,
    image:
      'https://floom.imgix.net/products/ad87ac41-4da5-4cf7-ae90-ab62fbf51dfa.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=01a820c4114e80df626ea23ffcb6c3b8',
    name: 'Country Basket',
    florist: 'Willow and Twiggs',
    price: '$45.00',
  },
  {
    index: 4,
    image:
      'https://floom.imgix.net/products/bb5f939f-d433-4162-96b1-f02f2c32575a.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=a9856deec1db2c7f6b8541152102a13f',
    name: 'Artemis',
    florist: "Michelle's Flowers",
    price: '$30.00 - $50.00',
  },
  {
    index: 5,
    image:
      'https://floom.imgix.net/products/4ebc7f5a-868c-4bff-a3b9-3364bb91f4a9.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=39d4972a411fe91fcfd7d9417bc0ca9f',
    name: 'Long Stem Red Naomi',
    florist: 'Love Rose',
    price: '$85.00 - $295.00',
  },
  {
    index: 6,
    image:
      'https://floom.imgix.net/products/c00587bf-ce68-4613-995e-47cb48b534b0.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=551d1c8f75cb45aaee856c7e81700dc5',
    name: 'Hydrangea Bouquet',
    florist: 'Blossom Florists',
    price: '$70.00 - $90.00',
  },
  {
    index: 7,
    image:
      'https://floom.imgix.net/products/b08bb8c4-6633-41b3-9a91-93caf214d96b.jpeg?ixlib=js-2.3.2&auto=format&jpegQuality=80&interlace=true&mode=crop&w=600&s=a9a439561dacf37add995f692fc067dc',
    name: 'Emerald Kiss',
    florist: 'Occasions Florist',
    price: '$44.00 - $57.00',
  },
];

export default Home;
