import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const index = state.items.findIndex((el) => el.id === action.item.id);
    const indexItem = state.items[index];
    let updatedItems;
    if (indexItem) {
      const newItem = {
        ...indexItem,
        amount: indexItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[index] = newItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((el) => el.id === action.id);
    const item = state.items.find((el) => el.id === action.id);
    if (item) {
      item.amount--;
      let newItems = [...state.items];
      newItems[itemIndex] = item;
      const updatedTotalAmount = state.totalAmount - item.price;
      if (item.amount <= 0) {
        newItems = newItems.filter((el) => el.id !== action.id);
      }
      return {
        items: newItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    AddItem: addItemToCartHandler,
    RemoveItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
