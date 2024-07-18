const Box = (char) => {
  const img = require(`./image/Characters/${char.name}.png`);
  const ele = require(`./image/Elements/${char.elements}.webp`);
  const bg4 = require(`./image/Background/Background_Item_4_Star.webp`);
  const bg5 = require(`./image/Background/Background_Item_5_Star.webp`);

  return (
    <>
      <span className="ml-1 cursor-pointer select-none">
        <span
          className="inline-block hover:scale-110 mt-5 mr-1 rounded-2xl bg-[#e2eff1] transition ease-in-out shadow-2xl"
          style={{
            borderTop: char.select == true ? "5px solid #00FFDD" : "",
            borderBottom: char.select == true ? "5px solid #00FFDD" : "",
            transition: "all .15s ease-in-out",
          }}
        >
          <img
            src={ele}
            draggable="false"
            className="z-[2] float-left absolute rounded-tl-2xl m-[3px] select-none"
            style={{
              width: "32px",
              height: "32px",
              visibility:
                char.elements == "none" || char.elements == null
                  ? "hidden"
                  : "visible",
            }}
          />
          <img
            src={img}
            draggable="false"
            className="bgs rounded-t-2xl w-[133px] h-[130px] rounded-br-3xl relative z-[1] bg-center bg-no-repeat bg-cover select-none"
            style={{
              backgroundImage:
                char.rarity === 5 ? `url(${bg5})` : `url(${bg4})`,
            }}
          />
          <h1 className="text-[17px] text-center truncate w-[8.3rem]">
            {char.name}
          </h1>
        </span>
      </span>
    </>
  );
};

export default Box;
