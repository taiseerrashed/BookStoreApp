import React, { useContext, useState } from 'react';
import "./BookSlider.css";
import Rating from './Rating';
import Modal from '../modal/Modal';
import CartContext from '../../context/CartContext';

const BookSlider = ({data}) => {
    const { addToCart } = useContext(CartContext);

    const [slideIndex, setSlideIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null);

    // Handle Click
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex >= 1 ? slideIndex - 1 : 6);
        } else {
            setSlideIndex(slideIndex <= 6 ? slideIndex + 1 : 0);
        }
    };

    // Handle Modal
    const handleModal = (book) => {
        setOpenModal(true);
        setBookData(book);
    }

  return (
    <section className='book-slider'>
        <div className='book-slider-container'>
            <i onClick={() => handleClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>
            <div style={{transform: `translateX(${slideIndex * -300}px)`}} className='book-slider-wrapper'>
                {data.map((item) => 
                    <div key={item.id} className='book-slide-item'>
                        <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img' />
                        <h3 className='book-slide-item-title'>{item.title}</h3>
                        <Rating rating={item.rating} reviews={item.reviews} />
                        <div className='book-slide-item-price'>${item.price}</div>
                        <div className='book-slider-icons-wrapper'>
                            <i onClick={() => handleModal(item)} className="bi bi-eye-fill"></i>
                            <i onClick={() => addToCart({...item, quantity: 1})} className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                )}
            </div>
            <i onClick={() => handleClick("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>

            {openModal  && <Modal bookData={bookData} setOpenModal={setOpenModal} />}

        </div>
    </section>
  );
};

export default BookSlider;