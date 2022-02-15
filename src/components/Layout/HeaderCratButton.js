import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCratButton.module.css";
import CartContext from "../store/Cart-context";

const HeaderCratButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isActive, SetIsActive] = useState(false);
  const NumberCommand = cartCtx.item.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  let BtnClasses = `${classes.button} ${isActive ? classes.bump : ""}`;
  useEffect(() => {
    if (NumberCommand !== 0) SetIsActive(true);
    const timer = setTimeout(() => {
      SetIsActive(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [NumberCommand]);
  return (
    <button className={BtnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumberCommand}</span>
    </button>
  );
};

export default HeaderCratButton;
