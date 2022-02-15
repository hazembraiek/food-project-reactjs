import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, { useState } from "react";
import CartProvider from "./components/store/Provider";

function App() {
  const [isOpen, SetIsOpen] = useState(false);
  const OpenPopup = () => {
    SetIsOpen(true);
  };
  const ClosePopup = () => {
    SetIsOpen(false);
  };
  return (
    <CartProvider>
      {isOpen ? <Cart onClick={ClosePopup} /> : ""}
      <Header onSubmit={OpenPopup} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
