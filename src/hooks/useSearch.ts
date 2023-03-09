import { useState, ChangeEvent } from "react";
import axios from "axios";
const useSearch = () => {
  const [term, setTerm] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    console.log(term);
  };

  const getSearchOptions = (term: string) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
      .then((res) => {
        console.log(res.data);
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
