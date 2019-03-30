import React from "react";
import Products from "./products";
import Store from "../../utils/Store";

function StoreSetup() {
  const { token } = Store.get("userData");
  if (!token) window.location = "/";
  return (
    <div>
      <Products />
    </div>
  );
}

export default StoreSetup;
