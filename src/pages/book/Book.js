import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../data/books';
import Rating from '../../components/book-slider/Rating';
import "./Book.css"
import CartContext from '../../context/CartContext';

const Book = () => {
    const { addToCart } = useContext(CartContext);

    const {id} = useParams(); 
    const book = books.find((b) => b.id === +id);
    // console.log(book);

    const [qty, setQty] = useState(1);
    
  return (
    <div className="book">
        <div className="book-content">
            <img src={`/books/${book.image}`} alt={book.title} className="book-content-img" />
            <div className="book-content-info">
                <h1 className="book-title">{book.title}</h1>
                <div className="book-auther">
                    by <span>{book.author}</span> (Author)
                </div>
                <Rating rating={book.rating} reviews={book.reviews} />
                <div className="book-add-to-cart">
                    <input
                      type="number"
                      min="1" 
                      max="100" 
                      className="book-add-to-cart-input"
                      value={qty}
                      onChange={(e)=> setQty(e.target.value)} 
                    />
                    <button onClick={()=> addToCart({...book, quantity: qty})} className="book-add-to-cart-btn">
                        <i className="bi bi-cart-plus"></i> {" "}
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        <p className="book-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            molestiae corporis facere minima consequuntur, blanditiis voluptatem
            praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
            nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
            consequatur doloribus laborum adipisci quo voluptates dolorum cumque
            tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
        </p>
        <div className="book-icons">
            <div className="book-icon">
                <small>Print Length</small>
                <i className="bi bi-file-earmark-break"></i>
                <b>{book.printLength} Pages</b>
            </div>
            <div className="book-icon">
                <small>Language</small>
                <i className="bi bi-globe"></i>
                <b>{book.language} Pages</b>
            </div>
            <div className="book-icon">
                <small>Puublication date</small>
                <i className="bi bi-calendar3"></i>
                <b>{book.PublicationDate} Pages</b>
            </div>
        </div>
    </div>
  );
};

export default Book;