const Box = (boss) => {
  const img = require(`./image/Boss/${boss.name}.webp`);
  const bg = require(`./image/Background/Background_Item_5a_Star.webp`);

  return (
    <>
      <span className="ml-1 cursor-pointer select-none">
        <span
          className="inline-block hover:scale-110 mt-5 mr-1 rounded-2xl bg-[#e2eff1] transition ease-in-out shadow-2xl"
          style={{
            borderTop: boss.select == true ? "5px solid #00FFDD" : "",
            borderBottom: boss.select == true ? "5px solid #00FFDD" : "",
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
    </>
  );
};

export default Box;
