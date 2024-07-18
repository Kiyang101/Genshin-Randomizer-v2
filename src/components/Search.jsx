import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = (props) => {
  const [characters, setCharacters] = useState(props.data);

  useEffect(() => {
    setCharacters(props.data);
  }, [props.data]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    props.name(e.target.value);
  };

  useEffect(() => {
    const updatedCharacters = characters.map((char) => {
      if (inputValue === "") {
        return { ...char, display: { ...char.display, disSearch: true } };
      }

      if (inputValue.length > 0) {
        if (char.name.toLowerCase().includes(inputValue.toLowerCase())) {
          return { ...char, display: { ...char.display, disSearch: true } };
        }
        if (!char.name.toLowerCase().includes(inputValue.toLowerCase())) {
          return { ...char, display: { ...char.display, disSearch: false } };
        }
        return char;
      }
    });
    props.updatedata(updatedCharacters);
  }, [inputValue]);

  return (
    <div className="mt-5 inline-flex">
      <span className="ml-5 border-solid border-2 border-[#2CD3E1] bg-[#AEE2FF] rounded-3xl pl-1 pr-1">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-xl translate-y-[-2px] pl-2 text-[#212A3E] "
        />
        <input
          className="ml-2 text-2xl placeholder:text-[#212A3E] 
          bg-[#AEE2FF] focus:outline-none rounded-r-[2rem]"
          type="text"
          placeholder="Search character name"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
        />
      </span>
    </div>
  );
};

export default Search;
