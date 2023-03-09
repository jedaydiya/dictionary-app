import { useState, ChangeEvent } from "react";
import axios from "axios";
import { wordType } from "../types";
const useSearch = () => {
  const [term, setTerm] = useState<string>("");
  const [word, setWord] = useState<wordType | null>(null);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    console.log(term);
  };

  const getSearchOptions = (term: string) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      .then((res) => {
        console.log(res.data);
        setWord(res.data);
      });
  };

  const onSubmit = () => {
    getSearchOptions(term);
  };

  return {
    term,
    onInputChange,
    onSubmit,
  };
};

export default useSearch;
