import { useEffect, useState, useMemo } from "react";
import Data from "./components/Data";
import CharList from "./components/CharacterList";
import BossList from "./components/BossList";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Random from "./components/Random";
import { every, isEqual } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  type Character = {
    id: number;
    name?: string;
    weapon?: string;
    elements?: string;
    rarity?: number;
    select?: boolean;
    display: { [key: string]: boolean };
  };

  type Boss = {
    id: number;
    name?: string;
    select?: boolean;
    display?: boolean;
  };

  type FilterData = {
    show4?: boolean;
    show5?: boolean;
    showSword?: boolean;
    showClaymore?: boolean;
    showPolearm?: boolean;
    showBow?: boolean;
    showCatalyst?: boolean;
    showAnemo?: boolean;
    showCryo?: boolean;
    showDendro?: boolean;
    showElectro?: boolean;
    showGeo?: boolean;
    showHydro?: boolean;
    showPyro?: boolean;
  };

  const {
    data_characters,
    data_bosses,
    loading_character,
    loading_boss,
    error_character,
    error_boss,
  } = Data();

  const [CharacterData, setCharacterData] = useState<Character[]>([]);
  const [BossData, setBossData] = useState<Boss[]>([]);
  const [isSelect_Char, setIsSelect_Char] = useState(false);
  const [isSelectAll_Char, setIsSelectAll_Char] = useState(false);

  const [isSelect_Boss, setIsSelect_Boss] = useState(false);
  const [isSelectAll_Boss, setIsSelectAll_Boss] = useState(false);

  const defaultFilters: FilterData = {
    show4: true,
    show5: true,
    showSword: true,
    showClaymore: true,
    showPolearm: true,
    showBow: true,
    showCatalyst: true,
    showAnemo: true,
    showCryo: true,
    showDendro: true,
    showElectro: true,
    showGeo: true,
    showHydro: true,
    showPyro: true,
  };

  const [Filters, setFilters] = useState<FilterData>(defaultFilters);

  useEffect(() => {
    setCharacterData(data_characters);
  }, [data_characters]);

  useEffect(() => {
    setBossData(data_bosses);
  }, [data_bosses]);

  const updateCharacterData = (newData: { id: number; select: boolean }) => {
    const updatedCharacters = CharacterData.map((character) =>
      character.id === newData.id ? { ...character, ...newData } : character
    );
    setCharacterData(updatedCharacters);
  };

  const updateBossData = (newData: { id: number; select: boolean }) => {
    const updateBosses = BossData.map((boss) =>
      boss.id === newData.id ? { ...boss, ...newData } : boss
    );
    setBossData(updateBosses);
  };

  const updataFilterCharData = (newData: Character[]) => {
    setCharacterData(newData);
  };

  const updateFilter = (newData: FilterData) => {
    setFilters(newData);
  };

  const Updated_Characters = useMemo(() => {
    const elementKeys = [
      "disSearch",
      "disFour",
      "disFive",
      "disAnemo",
      "disCryo",
      "disDendro",
      "disElectro",
      "disGeo",
      "disHydro",
      "disPyro",
      "disSword",
      "disClaymore",
      "disBow",
      "disPolearm",
      "disCatalyst",
    ];
    const update = CharacterData.map((char) => {
      const hasFalse =
        char.display && elementKeys.some((key) => char.display[key] === false);

      if (char.select == true) {
        setIsSelect_Char(true);
      }

      const noneSelect_Char = () => {
        return CharacterData.every((obj) => !obj.select);
      };

      const allSelect_Char = () => {
        return CharacterData.every((obj) => obj.select);
      };

      if (allSelect_Char()) {
        setIsSelectAll_Char(true);
      } else {
        setIsSelectAll_Char(false);
      }

      if (noneSelect_Char()) {
        setIsSelect_Char(false);
      }

      if (hasFalse) {
        const newDisplay = { ...char.display, real: false };
        return { ...char, display: newDisplay };
      }
      return char;
    });
    return update;
  }, [CharacterData]);

  const Updated_Characters2 = useMemo(() => {
    const elementKeys = [
      "disSearch",
      "disFour",
      "disFive",
      "disAnemo",
      "disCryo",
      "disDendro",
      "disElectro",
      "disGeo",
      "disHydro",
      "disPyro",
      "disSword",
      "disClaymore",
      "disBow",
      "disPolearm",
      "disCatalyst",
    ];
    const update = CharacterData.map((char) => {
      if (typeof char.display === "object" && char.display !== null) {
        const allPresentKeysTrue = elementKeys.every(
          (key) =>
            !char.display.hasOwnProperty(key) || char.display[key] === true
        );

        if (allPresentKeysTrue) {
          return { ...char, display: { ...char.display, real: true } };
        }
      }

      return char;
    });
    return update;
  }, [CharacterData]);

  const [disSearchFalse, setAlldisSearchFlase] = useState(false);
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    const allDisSearchFalse = CharacterData.every(
      (char) =>
        char.display.hasOwnProperty("disSearch") &&
        char.display.disSearch === false
    );
    if (allDisSearchFalse) {
      setAlldisSearchFlase(true);
    } else {
      setAlldisSearchFlase(false);
    }
  }, [CharacterData]);

  const search = (name: string) => {
    setSearchName(name);
  };

  useEffect(() => {
    if (!isEqual(CharacterData, Updated_Characters)) {
      setCharacterData(Updated_Characters);
    }
  }, [Updated_Characters]);

  useEffect(() => {
    if (!isEqual(CharacterData, Updated_Characters2)) {
      setCharacterData(Updated_Characters2);
    }
  }, [Updated_Characters2]);

  // const updateSelectboss = useMemo(() => {
  //   const update = BossData.map((boss) => {
  //     if (boss.select == true) {
  //       setIsSelect_Boss(true);
  //     }

  //     const noneSelect_Boss = () => {
  //       return CharacterData.every((obj) => !obj.select);
  //     };

  //     const allSelect_Boss = () => {
  //       return CharacterData.every((obj) => obj.select);
  //     };

  //     if (allSelect_Boss()) {
  //       setIsSelectAll_Boss(true);
  //     } else {
  //       setIsSelectAll_Boss(false);
  //     }

  //     if (noneSelect_Boss()) {
  //       setIsSelect_Boss(false);
  //     }

  //     return boss;
  //   });
  //   return update;
  // }, [BossData]);

  // useEffect(() => {
  //   if (!isEqual(BossData, updateSelectboss)) {
  //     setBossData(updateSelectboss);
  //   }
  // }, [updateSelectboss]);

  useEffect(() => {
    console.log("Data Charcters:", CharacterData);
  }, [CharacterData]);

  useEffect(() => {
    console.log("Data Boss:", BossData);
  }, [CharacterData]);

  const [show, setShow] = useState(false);

  const filtermenu = (newData: boolean) => {
    setShow(newData);
  };

  const [displayCharcaters, setdisplayCharcaters] = useState(true);
  const [displayBoss, setdisplayBoss] = useState(true);

  const ClickdisplayChar = () => {
    setdisplayCharcaters((e) => !e);
  };

  const ClickdisplayBoss = () => {
    setdisplayBoss((e) => !e);
  };

  const selectAllcharacter = () => {
    const update = CharacterData.map((char) => {
      if (char.select !== true) {
        return { ...char, select: true };
      }
      return char;
    });
    // console.log("Select All : ", update)
    setCharacterData(update);
  };

  const disselectAllcharacter = () => {
    const update = CharacterData.map((char) => {
      if (char.select == true) {
        return { ...char, select: false };
      }
      return char;
    });
    // console.log("disSelect All : ", update)
    setCharacterData(update);
  };

  const selectAllboss = () => {
    const update = BossData.map((boss) => {
      if (boss.select !== true) {
        return { ...boss, select: true };
      }
      return boss;
    });
    // console.log("Select All : ", update)
    setBossData(update);
  };

  const disselectAllboss = () => {
    const update = BossData.map((boss) => {
      if (boss.select == true) {
        return { ...boss, select: false };
      }
      return boss;
    });
    // console.log("disSelect All : ", update)
    setBossData(update);
  };

  return (
    <>
      <div
        className=" bg-[#AEE2FF] m-[2%] rounded-xl"
        style={{
          boxShadow: "5px 5px 32px 2px rgba(0,0,0,0.4)",
        }}
      >
        <div className="text-3xl pt-4">
          <h1 className="mb-5 text-center">
            สุ่มทีมสู้บอส
            <br />
            Genshin Impact Randomizer
            <br />
            By Kiyang
          </h1>
          <p className="text-xl text-center">
            ถ้าคุณเบื่อไม่รู้จะเล่นตัวละครอะไรดี
            <br />
            เราขอเสนอเว็ปสุ่มทีมตัวละครและบอส
            เพื่อความสนุกที่ท้าทายและหลากหลายในการเล่นเกมมากขึ้น
          </p>
          <div
            className="rounded-xl m-5 p-2"
            style={{ boxShadow: "5px 5px 32px 2px rgba(0,0,0,0.4)" }}
          >
            <h1 className="text-4xl text-center">Select your Character&Boss</h1>
            <div
              style={{
                borderBottom: "1px solid black",
              }}
              className="pb-5 justify-start"
            >
              <Filter
                data={CharacterData}
                updatefilter={updateFilter}
                updatedata={updataFilterCharData}
                filter={Filters}
                showed={filtermenu}
              />
              <Search
                data={CharacterData}
                updatedata={updataFilterCharData}
                name={search}
              />
              <Random char={CharacterData} boss={BossData} />
            </div>

            {loading_character && (
              <div className="text-center mt-4">
                Loading Characters
                <br />
                <FontAwesomeIcon
                  icon={faSpinner}
                  spinPulse
                  style={{ fontSize: "2.3rem", marginTop: "1rem" }}
                />
              </div>
            )}

            {!loading_character && (
              <div className="m-3 ">
                <button
                  className="text-2xl bg-[#2CD3E1] hover:bg-[#00FFAB] hover:shadow-btn text-[#e2eff1] pl-1 pr-1 pt-0 pb-0 rounded-xl"
                  style={{ transition: "all .2s ease-in-out" }}
                  onClick={ClickdisplayChar}
                >
                  Characters
                  {displayCharcaters && (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="ml-2 text-2xl"
                    />
                  )}
                  {!displayCharcaters && (
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="ml-2 text-2xl"
                    />
                  )}
                </button>

                {!isSelectAll_Char && (
                  <button
                    className="text-2xl bg-[#2CD3E1] hover:bg-[#00FFAB] hover:shadow-btn text-[#e2eff1] pl-2 pr-2 pt-0 pb-0 rounded-xl ml-4"
                    style={{ transition: "all .2s ease-in-out" }}
                    onClick={selectAllcharacter}
                  >
                    select all
                  </button>
                )}

                {isSelect_Char && (
                  <button
                    className="text-2xl bg-[#2CD3E1] hover:bg-[#FF1700] hover:shadow-btn text-[#e2eff1] pl-2 pr-2 pt-0 pb-0 rounded-xl ml-4"
                    style={{ transition: "all .2s ease-in-out" }}
                    onClick={disselectAllcharacter}
                  >
                    unselect all
                  </button>
                )}
              </div>
            )}

            {!loading_character && displayCharcaters && (
              <div style={{ pointerEvents: show ? "none" : "visible" }}>
                <CharList
                  data={CharacterData}
                  updatedata={updateCharacterData}
                />
                {disSearchFalse && (
                  <div className="text-center">
                    No character name is {searchName}
                  </div>
                )}
              </div>
            )}

            {loading_boss && (
              <div className="text-center mt-4">
                Loading Bosses
                <br />
                <FontAwesomeIcon
                  icon={faSpinner}
                  spinPulse
                  style={{ fontSize: "2.3rem", marginTop: "1rem" }}
                />
              </div>
            )}

            {!loading_boss && (
              <div className="m-3 ">
                <button
                  className="text-2xl bg-[#2CD3E1] hover:bg-[#00FFAB] hover:shadow-btn text-[#e2eff1] pl-1 pr-1 pt-0 pb-0 rounded-xl"
                  style={{ transition: "all .2s ease-in-out" }}
                  onClick={ClickdisplayBoss}
                >
                  Bosses
                  {displayCharcaters && (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="ml-2 text-2xl"
                    />
                  )}
                  {!displayCharcaters && (
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="ml-2 text-2xl"
                    />
                  )}
                </button>
                {!isSelectAll_Boss && (
                  <button
                    className="text-2xl bg-[#2CD3E1] hover:bg-[#00FFAB] hover:shadow-btn text-[#e2eff1] pl-2 pr-2 pt-0 pb-0 rounded-xl ml-4"
                    style={{ transition: "all .2s ease-in-out" }}
                    onClick={selectAllboss}
                  >
                    select all
                  </button>
                )}
                {/* {isSelect_Boss  */}
                {/* &&{" "} */}
                {
                  <button
                    className="text-2xl bg-[#2CD3E1] hover:bg-[#FF1700] hover:shadow-btn text-[#e2eff1] pl-2 pr-2 pt-0 pb-0 rounded-xl ml-4"
                    style={{ transition: "all .2s ease-in-out" }}
                    onClick={disselectAllboss}
                  >
                    unselect all
                  </button>
                }
              </div>
            )}

            {!loading_boss && displayBoss && (
              <div style={{ pointerEvents: show ? "none" : "visible" }}>
                <BossList data={BossData} updatedata={updateBossData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
