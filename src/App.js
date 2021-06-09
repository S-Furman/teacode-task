import { useState } from "react";

import "./App.css";

import ContactsList from "./components/ContactsList/ContactsList";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (inputValue) => {
    const firstLetterToUpper = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    setInputValue(firstLetterToUpper(inputValue));
  };

  return (
    <>
      <SearchInput inputValue={changeHandler} />
      <ContactsList searchValue={inputValue} />
    </>
  );
}

export default App;
