import { useState, useEffect } from "react";
import Box from "./CharacterBox";
const CharList = (props) => {
  const [characters, setCharacters] = useState(props.data);

  useEffect(() => {
    setCharacters(props.data);
  }, [props]);

  const select = (id) => {
    const Updated_Characters = characters.map((char) => {
      if (char.id === id) {
        return { ...char, select: (char.select = !char.select) };
      }
      return char;
    });
    props.updatedata(Updated_Characters);
  };

  return (
    <>
      <div
        className="bg-[#95BDFF] rounded-2xl mt-3 mobile:mt-0 mobile:mb-5 text-center"
        style={{
          boxShadow: "5px 5px 32px 2px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* <h1>{characters.name}</h1> */}
        {characters
          .sort((a, b) => b.id - a.id)
          .filter((char) => char.display?.real)
          .map((char) => {
            return (
              <span onClick={() => select(char.id)} key={char.id}>
                <Box {...char} key={char.id} />
              </span>
            );
          })}
      </div>
    </>
  );
};

export default CharList;
