import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className=" grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />
      <main className="overflow-scroll">
        <div className=" mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
