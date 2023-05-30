/*"use client";

import ModalReducer, { modalState } from "@/reducers/ModalReducer";
import React, { createContext, ReactNode, useReducer } from "react";

interface IContext {
  state: Boolean;
  dispatch?: React.Dispatch<any>;
}

export const ModalContext = createContext<IContext>(modalState);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ModalReducer, modalState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
*/
