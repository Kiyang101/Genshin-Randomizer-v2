import axios from "axios";
import { useEffect, useState } from "react";
import CharactersData from "./data/Characters.json";
import BossesData from "./data/Bosses.json";

const Data = () => {
  const [data_characters, setData_character] = useState([]);
  const [data_bosses, setData_boss] = useState([]);
  const [loading_character, setLoading_character] = useState(true);
  const [loading_boss, setLoading_boss] = useState(true);
  const [error_character, setError_character] = useState(null);
  const [error_boss, setError_boss] = useState(null);

  useEffect(() => {
    setData_character(CharactersData);
    setData_boss(BossesData);
    setLoading_character(false);
    setLoading_boss(false);
  }, []);

  // const apiEndpoint_Characters =
  //   "https://ill-erin-oyster-robe.cyclic.app/charact";
  // const apiEndpoint_Bosses = "https://ill-erin-oyster-robe.cyclic.app/bosses";
  // const authString = "kiyang:kiyang1234";

  //   const apiEndpoint_Characters = "http://localhost:5000/characters";
  //   const apiEndpoint_Bosses = "http://localhost:5000/bosses";
  //   const authString = "kiyang:n2ES5CPLV9MFVOBM";
  //   const headers = {
  //     Authorization: `Basic ${btoa(authString)}`,
  //   };
  //   //Character
  //   useEffect(() => {
  //     axios
  //       .get(apiEndpoint_Characters, { headers: headers })
  //       .then((response) => {
  //         setData_character(response.data);
  //         setLoading_character(false);
  //       })
  //       .catch((err) => {
  //         setError_character(err.message);
  //         setLoading_character(false);
  //       });
  //   }, []);
  //   //Boss
  //   useEffect(() => {
  //     axios
  //       .get(apiEndpoint_Bosses, { headers: headers })
  //       .then((response) => {
  //         setData_boss(response.data);
  //         setLoading_boss(false);
  //       })
  //       .catch((err) => {
  //         setError_boss(err.message);
  //         setLoading_boss(false);
  //       });
  //   }, []);

  return {
    data_characters,
    data_bosses,
    loading_character,
    loading_boss,
    error_character,
    error_boss,
  };
};

export default Data;
