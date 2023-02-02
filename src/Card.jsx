import { useState } from "react";

export default function Card(props) {
  let [isAdded, setIsAdded] = useState(false);
  let { product } = props;
  let [quantity, setQuantity] = useState(1);
  function incrementQuantity() {
    setQuantity(quantity + 1);
    props.setTotal(props.total + product.price);
  }
  function decrementQuantity() {
    setQuantity(quantity - 1);
    props.setTotal(props.total - product.price);
  }
  function onAdd() {
    if (isAdded) {
      props.decreaseCartItem();
      setIsAdded(false);
      props.setTotal(props.total - quantity * product.price);
      setQuantity(1);
    } else {
      props.addCartItem();
      setIsAdded(true);
      props.setTotal(props.total + product.price);
    }
  }
  return (
    <div className="card-wrapper">
      <div className="image-wrapper">
        <img src={product.path} alt="Mobile"></img>
      </div>
      <div className="content">
        <div className="name">{product.name}</div>
        <div className="price">${product.price}</div>
        {isAdded && (
          <div className="quantity">
            <div onClick={incrementQuantity}>+</div>
            <div>{quantity}</div>
            <button disabled={quantity <= 1} onClick={decrementQuantity}>
              -
            </button>
          </div>
        )}
        <button className="b" onClick={onAdd}>
          {isAdded ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}
