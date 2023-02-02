import { useState } from "react";
import Card from "./Card";
import Total from "./Total";
import Header from "./Header";
let products = [
  {
    name: "Redmi Note 11 PRO",
    path: "redmi.jpg",
    price: 20000
  },
  {
    name: "Realme 10 Pro+ 5G",
    path: "realme.jpg",
    price: 25000
  },
  {
    name: "Apple 14 Pro Max ",
    path: "iphone.jpg",
    price: 150000
  },
  {
    name: "OnePlus 9R 5G",
    path: "1plus.jpg",
    price: 40000
  }
];

export default function App() {
  let [cartItems, setCartItems] = useState(0);
  let [total, setTotal] = useState(0);
  function addCartItem() {
    setCartItems(cartItems + 1);
  }
  function decreaseCartItem() {
    setCartItems(cartItems - 1);
  }
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        {products.map((e, i) => (
          <Card
            addCartItem={addCartItem}
            decreaseCartItem={decreaseCartItem}
            product={e}
            key={i}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </main>
      <Total total={total} />
    </>
  );
}
