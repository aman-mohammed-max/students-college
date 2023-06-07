import React, { createContext, useState } from "react";

export const headeritem = createContext();

export default function Headerprovider({ children }) {
  const [title, settitle] = useState("student");
  const [fis, setfis] = useState({
    node: undefined,
    nodeclass: "",
  });

  return (
    <headeritem.Provider value={{ title, settitle, fis, setfis }}>
      {children}
    </headeritem.Provider>
  );
}
