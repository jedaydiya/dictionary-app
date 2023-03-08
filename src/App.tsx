import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Search />
      </div>
    </>
  );
}

export default App;
