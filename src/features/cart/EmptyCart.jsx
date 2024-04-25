import React from "react";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h1 className="mt-3 text-xl">
        Your cart is still empty. start adding some pizzas :)
      </h1>
    </div>
  );
}

export default EmptyCart;
