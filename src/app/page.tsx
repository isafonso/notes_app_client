import { Header, Main } from "@/components";
/*import ModalContextProvider from "@/contexts/ModalContext";*/
import { Fragment } from "react";

export default function Home() {
  return (    
      <div className="app">
        <Header />
        {/* @ts-ignore */}
        <Main />
      </div>
  );
}
