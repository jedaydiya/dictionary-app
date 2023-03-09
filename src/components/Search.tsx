import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ChangeEvent } from "react";
type Props = {
  term: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};
const Search = ({ term, onInputChange, onSubmit }: Props) => {
  return (
    <>
      <div className="flex justify-center gap-8">
        <input
          value={term}
          onChange={onInputChange}
          className=" bg-[#DAD7CD] px-2 py-2 leading-tight text-gray-700 rounded-l-sm w-full focus:outline-none  hover:border-[#588157]
          border-b-4 border-[#A3B18A]"
          type="text"
          placeholder="Search definitions here"
        />
        <button
          className="w-half p-4 bg-[#A3B18A] rounded-md flex gap-1 hover:bg-[#588157] active:bg-[#3A5A40]"
          onClick={onSubmit}
        >
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default Search;
