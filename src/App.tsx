import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";
import Definition from "./components/Definition";
import useSearch from "./hooks/useSearch";
import Navbar from "./components/Navbar";

function App() {
  const { term, onInputChange, onSubmit, word, audio } = useSearch();
  return (
    <>
      {/* <div className="flex items-center justify-center"> */}
      {/* <section className="w-[650px] h-full bg-[#DAD7CD] rounded-md py-4 px-10 m-4"> */}
      {word ? (
        <>
          <Search
            term={term}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
          <Definition data={word} audio={audio} />
        </>
      ) : (
        <Search term={term} onInputChange={onInputChange} onSubmit={onSubmit} />
      )}
      {/* </section> */}
      {/* </div> */}
    </>
  );
}

export default App;
