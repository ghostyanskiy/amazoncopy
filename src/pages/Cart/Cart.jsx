import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cartSlice.js/cartSlice";
import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="cart">
      <div className="cart-left">
        <h2 className="cart-title">Shopping Cart</h2>
        <hr />
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt="" />
            <div className="item-title">
              <span>{item.name}</span>
              <p className="item-stock">
                In <span>Stock</span>
              </p>
              <p className="item-gift main-color">
                Gift options not available. <a href="#">Learn more</a>
              </p>
              <div className="items-panel">
                <input id="quantity" type="number" name="quantity" min="1" />
                <hr />
                <p onClick={() => handleRemoveFromCart(item.id)}>Delete</p>
                <hr />
                <p>Save for later</p>
                <hr />
                <p>Share</p>
              </div>
            </div>
            <span className="item-price">{item.newprice}</span>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}
