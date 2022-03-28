import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__top">
        <div className="aboutTop__left">
          <img
            src="https://floom.imgix.net/general/Botanique-Video-header-img.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=65&w=600&s=b69deee4b4f24435a9241ba1a1347e30"
            alt="local florist"
          />
        </div>
        <div className="aboutTop__right">
          <h1>Are you a passionate local florist?</h1>
          <p>
            We're always looking for talented independent florists to join the
            Floom family!
            <br />
            <br />
            As one of our partners you'll get to keep your independence and
            identity while reaching more local flower lovers than ever before,
            thanks to our loyal and ever-growing audience.
          </p>
          <button className="btn">Partner With Us</button>
        </div>
      </div>
      <div className="about__middle">
        <h1 className="p-cap-head">A LITTLE ABOUT US</h1>
        <p>
          At Floom we're proud to be bringing the local florist experience
          online, reminding people just how special it is to both send flowers
          and have flowers delivered to you.
        </p>
        <p>
          We aim to combine a beautiful to look at, easy-to-use and flexible
          flower delivery service with the spark and magic that only the most
          passionate and skilled local florists can bring to a bouquet. We
          handpick every florist that we work with to ensure they share our
          values and our commitment to providing amazing online flower delivery
          experiences.
        </p>
        <p>
          When you order flowers online, we don't believe you should simply be a
          last-minute gift choice (though our same-day flower delivery option
          does help with that!). Flowers at their best can truly excite the
          senses, whatever the occasion, whatever the location: from Mother's
          Day flowers in Bristol to Valentine's Day flowers in London.
        </p>
        <p>
          Every item that you see on our site is utterly unique to the local
          florist who crafts it, which means it will also be unique to the
          sender and loved one who receives it. We don't believe in providing
          our florists with generic guidelines, instead, we let them create
          bouquets based on nature's seasonality and their own creative
          instincts.
        </p>
        <p>
          We're truly ambitious in our aims to build a global community of
          flower lovers, and spreading floral joy is what we're all about! We
          try to give our community as many opportunities to send flowers with
          the majority of our florists offering same day flower delivery,
          perfect for those last-minute gifts.
        </p>
      </div>
      <div className="about__bottom">
        <p>Find out more about us here:</p>
        <button className="btn">Discover Our Story</button>
      </div>
    </div>
  );
};

export default About;
