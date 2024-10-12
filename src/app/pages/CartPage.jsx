import React from "react";
import { Cart } from "../components/cart/Cart";
import Layout from "./Layout";

const CartPage = () => {
  return (
    <>
      <Layout title="Cart-SwiftPick">
        <Cart />
      </Layout>
    </>
  );
};

export default CartPage;
