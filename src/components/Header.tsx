"use client";

//import { ModalContext } from "@/contexts/ModalContext";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  //const { state, dispatch } = useContext(ModalContext);

  const handleCreate = () => {
    /*if (dispatch !== undefined) {
      dispatch({
        action: {
          payload: true,
        },
      });
    }*/
  };

  return (
    <header className="h-[80px] flex-1 lg:flex lg:justify-between lg:items-center bg-blue-500">
      <span className="text-white font-semibold ml-5">Notes App</span>
      <form
        action="/pesquisa"
        method="post"
        className="w-[60%] lg:flex lg:justify-center"
      >
        <input
          className="w-[50%] text-black font-semibold rounded-sm px-2 py-2 focus:outline-none"
          type="search"
          placeholder="Pesquisar por anotações"
          name="search"
        />
        <input
          className="hover:transition-all hover:delay-200 hover:ease-in-out font-semibold cursor-pointer ml-2 border-x border-y border-slate-100 px-2 py-2 rounded-sm bg-blue-500 text-slate-100 hover:bg-slate-100 hover:text-black"
          type="submit"
          value={"Pesquisar"}
        />
      </form>
      <div className="col-md-3 ms-5">
        {/*Button trigger modal*/}
        <Link
          href={"/criar"}
          className="hover:transition-all hover:delay-200 hover:ease-in-out mr-5 font-semibold cursor-pointer ml-2 border-x border-y border-slate-100 px-2 py-2 rounded-sm bg-blue-500 text-slate-100 hover:bg-slate-100 hover:text-black"
        >
          Criar anotação
        </Link>
      </div>
    </header>
  );
};

export default Header;
