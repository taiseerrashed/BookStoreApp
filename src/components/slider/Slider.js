import React, { useState } from 'react';
import "./Slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <section className='slider'>
        <div className='slider-container'>            
            <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>            
            <div className='slider-wrapper' style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                <div className='slide first-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={FirstBook} alt='First Book'/>
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>Book Store</h1>
                        <p className='slide-info-desc'>It's not just reading. It's living the adventure.</p>
                    </div>
                </div>
                <div className='slide second-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={SecondBook} alt='Second Book'/>
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>The Books For Everyone</h1>
                        <p className='slide-info-desc'>You can read at home or at the bookstore.</p>
                    </div>
                </div>
                <div className='slide third-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={ThirdBook} alt='Third Book'/>
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>Check Out The New Title</h1>
                        <p className='slide-info-desc'>We sent the book you want at home.</p>
                    </div>
                </div>
            </div>
            <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>          
        </div>
    </section>
  );
};

export default Slider;