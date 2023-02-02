import CartIcon from "./CartIcon";
export default function Header(props) {
  return (
    <div className="h">
      <div className="hp">Cart</div>
      <CartIcon cartItems={props.cartItems} />
    </div>
  );
}
