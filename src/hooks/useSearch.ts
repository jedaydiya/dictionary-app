import { useState, ChangeEvent } from "react";
import axios from "axios";
import { wordType } from "../types";
const useSearch = () => {
  const [term, setTerm] = useState<string>("");
  const [word, setWord] = useState<wordType | null>(null);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    // console.log(term);
  };

  const getSearchOptions = (term: string) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      .then((res) => {
        console.log(res.data[0]);
        setWord(res.data[0]);
      });
  };

  const onSubmit = () => {
    getSearchOptions(term);
  };

  return {
    term,
    onInputChange,
    onSubmit,
    word,
  };
};

export default useSearch;
