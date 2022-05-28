import React, { useState } from "react";

const StoreContext = React.createContext({
  store: "",
  register: "",
  onStoreOpen: (store,register) => {},
});

export const StoreContextProvider = (props) => {
  const [store, setStore] = useState("");
  const [register, setRegister] = useState("");
  const onStoreOpen = (register,store) => {
    setRegister(register);
    setStore(store);
  };
  return (
    <StoreContext.Provider
      value={{ store: store, register: register, onStoreOpen: onStoreOpen }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
