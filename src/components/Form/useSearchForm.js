import { useEffect, useState } from "react";

export const useSearchForm = (getCategories, jokes) => {
  const [searchType, setSearchType] = useState(undefined);
  const [categoty, setCategory] = useState(undefined);
  const [text, setText] = useState(undefined);

  useEffect(() => {
    getCategories();
  }, []);

  const onSearchTypeChange = e => {
    const value = e.target.value;
    setSearchType(value);
  };

  const handleRadioQuery = e => {
    const value = e.target.value;
    setCategory(value);
  };
  const handleTextQuery = e => {
    const value = e.target.value;
    setText(value);
  };

  let dbtDisabled =
    searchType === undefined ||
    (searchType === "byCategory" && categoty === undefined);


  return {
    searchType,
    onSearchTypeChange,
    handleRadioQuery,
    handleTextQuery,
    dbtDisabled
  };
};
