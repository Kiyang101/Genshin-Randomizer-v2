import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Random = (props) => {
  const [char, setchar] = useState(props.char);
  const [boss, setboss] = useState(props.boss);
  const [show, setshow] = useState(false);
  const [ranChar, setranChar] = useState([]);
  const [ranBoss, setranBoss] = useState([]);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setchar(props.char);
    setboss(props.boss);
  }, [props]);

  // useEffect(() => {
  //   console.log(show);
  // }, [show]);

  // useEffect(() => {
  //   console.log(ranChar);
  //   console.log(ranChar.length);
  // }, [ranChar.length]);

  // useEffect(() => {
  //   console.log(ranBoss);
  //   console.log(ranBoss.length);
  // }, [ranBoss.length]);

  const showWindowRandom = () => {
    if ((ranChar.length && ranBoss.length) == 0) {
      random();
      if (err) {
        return;
      } else {
        setshow(true);
      }
    } else {
      setshow(true);
    }

    // console.log("Show form showWindowRandom");
  };

  const hideWindowRandom = () => {
    setshow(false);
    // console.log("Hide form hideWindowRandom");
  };

  const ErrWindow = () => {
    const close = () => {
      setErr(false);
      setMessage("");
      setshow(false);
      // console.log("Hide form ErrWindow");
    };

    return (
      <>
        <div className="z-[99] fixed top-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,.7)] m-0 p-0 left-0 right-0"></div>
        <div className="z-[100] bg-slate-600 w-[30vw] fixed text-center rounded-xl top-[35%] bottom-[35%] left-[35%] right[35%] p-2">
          <div className="text-[#FF1700] text-4xl">**Error**</div>
          <div className="text-black text-2xl bg-slate-300 rounded-xl mt-3">
            {message}
          </div>
          <button
            onClick={close}
            className="mx-auto block text-white bg-[#FF1700] p-1 rounded-2xl mt-7 hover:shadow-btn pl-2 pr-2"
            style={{
              transition: "all .15s ease-in-out",
            }}
          >
            Close
          </button>
        </div>
      </>
    );
  };

  const randomCharacter = (selectedCharacter) => {
    // const selectedCharacter = char.filter((character) => character.select);

    // if (selectedCharacter.length < 5) {
    //   console.error("Not enough selected Characters to randomize");
    //   setErr(true);
    //   setMessage("Not enough selected Characters to randomize");
    //   return;
    // }

    const randomizedCharacters = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * selectedCharacter.length);
      const randomCharacter = selectedCharacter.splice(randomIndex, 1)[0];
      randomizedCharacters.push(randomCharacter);
    }

    randomizedCharacters.map((char) => {
      if (char.name == "Traveller") {
        const elements = ["Anemo", "Dendro", "Electro", "Geo", "Hydro"];
        const randomElement =
          elements[Math.floor(Math.random() * elements.length)];
        char.elements = randomElement;
      }
    });

    setranChar(randomizedCharacters);
  };

  const randomBoss = (selectedBoss) => {
    // const selectBoss = boss.filter((boss) => boss.select);

    // if (selectBoss.length < 1) {
    //   console.error("Not enough selected Bosses to randomize");
    //   setErr(true);
    //   setMessage("Not enough selected Bosses to randomize");
    //   return;
    // }

    const randomizeBosses = [];
    const randomBoss = selectedBoss.splice(
      Math.floor(Math.random() * selectedBoss.length),
      1
    )[0];
    randomizeBosses.push(randomBoss);
    setranBoss(randomizeBosses);
  };

  const random = () => {
    setchar(props.char);
    setboss(props.boss);

    const selectedCharacter = char.filter((character) => character.select);
    const selectedBoss = boss.filter((boss) => boss.select);

    if (selectedCharacter.length < 5) {
      console.error("Not enough selected Characters to randomize");
      setErr(true);
      setMessage("Not enough selected Characters to randomize");
      return;
    }

    if (selectedBoss.length < 1) {
      console.error("Not enough selected Bosses to randomize");
      setErr(true);
      setMessage("Not enough selected Bosses to randomize");
      return;
    }

    randomCharacter(selectedCharacter);
    randomBoss(selectedBoss);
  };

  const BoxChar = (char) => {
    const img = require(`./image/Characters/${char.name}.png`);
    const ele = require(`./image/Elements/${char.elements}.webp`);
    const bg4 = require(`./image/Background/Background_Item_4_Star.webp`);
    const bg5 = require(`./image/Background/Background_Item_5_Star.webp`);

    return (
      <>
        <div>
          <span className="ml-1 cursor-pointer select-none">
            <span
              className="inline-block hover:scale-110 mt-5 mr-1 rounded-2xl bg-[#e2eff1] transition ease-in-out shadow-2xl"
              style={{
                transition: "all .15s ease-in-out",
              }}
            >
              <img
                src={ele}
                draggable="false"
                className="z-[2] float-left absolute rounded-tl-2xl w-[32px] h-[32px] mobile:w-[25px] mobile:h-[25px] m-[3px] select-none"
                style={{
                  // width: "32px",
                  // height: "32px",
                  visibility:
                    char.elements == "none" || char.elements == null
                      ? "hidden"
                      : "visible",
                }}
              />
              <img
                src={img}
                draggable="false"
                className="bgs rounded-t-2xl w-[133px] h-[130px] mobile:w-[112px] mobile:h-[110px] rounded-br-3xl relative z-[1] bg-center bg-no-repeat bg-cover select-none"
                style={{
                  backgroundImage:
                    char.rarity === 5 ? `url(${bg5})` : `url(${bg4})`,
                }}
              />
              <h1 className="text-[17px] text-center truncate w-[8.3rem] mobile:w-[100px]">
                {char.name}
              </h1>
            </span>
          </span>
        </div>
      </>
    );
  };

  const BoxBoss = (boss) => {
    const img = require(`./image/Boss/${boss.name}.webp`);
    const bg = require(`./image/Background/Background_Item_5a_Star.webp`);
    return (
      <>
        <div>
          <span className="ml-1 cursor-pointer select-none">
            <span
              className="inline-block hover:scale-110 mt-5 mr-1 rounded-2xl bg-[#e2eff1] transition ease-in-out shadow-2xl"
              style={{
                transition: "all .15s ease-in-out",
              }}
            >
              <img
                src={img}
                className="bgs rounded-t-2xl w-[133px] h-[130px] rounded-br-3xl relative z-[1] bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${bg})`,
                }}
              />
              <h1 className="text-[17px] text-center truncate w-[8.3rem]">
                {boss.name}
              </h1>
            </span>
          </span>
        </div>
      </>
    );
  };

  const WindowRandom = () => {
    // if ((ranChar.length && ranBoss.length) == 0) {
    //   random();
    // }

    return (
      <>
        <div className="z-[45] fixed top-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,.7)] m-0 p-0 left-0 right-0"></div>
        <div
          className="fixed top-[20%] rounded-[10px] z-50 m-auto left-[10%] bottom-auto right-[10%] select-none"
          style={{
            background: "linear-gradient(#82AAE3, #91D8E4, #BFEAF5, #EAFDFC)",
          }}
        >
          <div className="text-center">
            <div className="absolute float-right right-0">
              <button
                className="m-1 cursor-pointer mr-3"
                onClick={hideWindowRandom}
              >
                <FontAwesomeIcon
                  className="mobile:text-5xl text-white text-[4rem]"
                  icon={faXmark}
                  // style={{ color: "#fff", fontSize: "4rem" }}
                />
              </button>
            </div>

            <div>
              {ranChar.length == 4 ? (
                ranChar.map((char) => {
                  return (
                    <span className="inline-block" key={char.id}>
                      <BoxChar {...char} key={char.id} />
                    </span>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <div>
              {ranBoss.map((boss) => {
                return (
                  <span className="inline-block" key={boss.id}>
                    <BoxBoss {...boss} key={boss.id} />
                  </span>
                );
              })}
            </div>
            <span className="top-[45%]">
              <button
                onClick={random}
                className="bg-[#00FFAB] rounded-xl p-2 text-white mt-4 mb-4 hover:shadow-btn"
                style={{ transition: "all .2s ease-in-out" }}
              >
                Random
              </button>
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {err && <ErrWindow />}
      <div className="inline-flex mobile:mt-2">
        <button
          onClick={showWindowRandom}
          className="ml-5 border-2 bg-[#2CD3E1] text-white rounded-3xl border-none
            pl-3 pr-3 pt-0.5 pb-0.5 text-2xl cursor-pointer select-none hover:shadow-btn"
          style={{ transition: "all .2s ease-in-out" }}
        >
          <FontAwesomeIcon icon={faShuffle} className="pr-1" />
          Random
        </button>
      </div>
      {show && <WindowRandom />}
    </>
  );
};

export default Random;
