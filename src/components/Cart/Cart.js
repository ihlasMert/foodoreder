import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = <ul className={classes["cart-items"]}>{[ {id: "1", name: "Sushi", amout: 2, price:324.23}].map((item) => <li> {item.name}</li>) }</ul>
  return (
  <Modal>
      cartıtem
    <div>
        <span>total amount</span>
        <span>32.23</span>
    </div>
    <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close </button>
        <button className={classes.button}> Order </button>

    </div>
  </Modal>
  );
};

export default Cart;
