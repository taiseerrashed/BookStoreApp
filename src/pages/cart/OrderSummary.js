const OrderSummary = ({totalPrice}) => {
  return (
    <div className="cart-order-summary">
        <h3 className="order-summary-title">Order Summary</h3>
        <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
                ${totalPrice}
            </span>
        </div>
        <div className="order-summary-item">
            <span>Shopping Cost</span>
            <span>
                0
            </span>
        </div>
        <div className="order-summary-item">
            <span>Discount</span>
            <span>
                0
            </span>
        </div>
        <div className="order-summary-item">
            <strong>Total</strong>
            <span>
                ${totalPrice}
            </span>
        </div>
    </div> 
  );
};

export default OrderSummary;