import React from 'react';
import Slider from '../../components/slider/Slider';
import Services from '../../components/services/Services';
import HeadingTitle from '../../components/heading-title/HeadingTitle';
import BookSlider from '../../components/book-slider/BookSlider';
import { books } from '../../data/books';

const HomePage = () => {
  return (
    <section className='home'>
        <Slider />
        <Services />
        <HeadingTitle title="Most gifted" />
        <BookSlider data={books} />
        <HeadingTitle title="Best Seller" />
        <BookSlider data={books} />
        <HeadingTitle title="Most wicshed for" />
        <BookSlider data={books} />
    </section>
  );
};

export default HomePage;