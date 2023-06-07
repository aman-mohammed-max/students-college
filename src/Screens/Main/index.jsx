import React from "react";
import Headerprovider from "../../Global/Components/header/provider";
import Header from "../../Global/Components/header";

export default function index() {
  return (
    <Headerprovider>
      <Header />
    </Headerprovider>
  );
}
