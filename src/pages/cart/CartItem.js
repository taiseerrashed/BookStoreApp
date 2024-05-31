const CartItem = ({item, addToCart, removeFromCart}) => {
    const {image, title, author, quantity, price, id} = item;
    
  return (
    <div className="cart-item">
        <img className="cart-item-img" src={`/books/${image}`} alt={item.title} />
        <div className="cart-item-info">
            <div>
                <div className="cart-item-book-title">
                    <b>Title: </b> {title}
                </div>
                <div className="cart-item-book-author">
                    <b>Auther: </b> {author}
                </div>
            </div>
            <div className="cart-item-quantity">
                <button onClick={() => addToCart({...item, quantity: item.quantity + 1})}>
                    <i className="bi bi-plus-lg"></i>
                </button>
                <b>{quantity}</b>
                <button disabled={quantity <= 1} onClick={() => addToCart({...item, quantity: item.quantity - 1})}>
                    <i className="bi bi-dash-lg"></i>
                </button>
                <div className="cart-itemms-price">
                    ${(price * quantity).toFixed(2)} 
                </div>
            </div>
            <div className="cart-remove">
                <i onClick={() => removeFromCart(id)} className="bi bi-trash3"></i>
            </div>
        </div>
    </div>
  );
};

export default CartItem;