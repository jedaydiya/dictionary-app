import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";
import Definition from "./components/Definition";
import useSearch from "./hooks/useSearch";

function App() {
  const { term, onInputChange, onSubmit } = useSearch();
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <section className="w-[650px] h-[450px] bg-[#DAD7CD] rounded-md py-4 px-10">
          <Search
            term={term}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
          <Definition />
        </section>
      </div>
    </>
  );
}

export default App;
