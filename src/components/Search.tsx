import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ChangeEvent } from "react";
import Navbar from "./Navbar";

type Props = {
  term: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};
const Search = ({ term, onInputChange, onSubmit }: Props) => {
  return (
    <>
      <div className="flex justify-between py-8 px-10">
        <p className="text-white text-xl p-2">definitions</p>
        <div className="flex gap-4 p-2">
          <div className="flex">
            <input
              value={term}
              onChange={onInputChange}
              className="bg-[#344e41] outline-none border-2 border-r-0 border-[#DAD7CD] text-white rounded-l-3xl p-2 text-center"
              type="text"
              placeholder="Search definitions here"
            />
            <button
              className="px-2 py-2  rounded-r-3xl border-2 border-l-0 border-[#DAD7CD] bg-[#A3B18A]"
              onClick={onSubmit}
            >
              <MagnifyingGlass size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
