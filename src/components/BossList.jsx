import { useState, useEffect } from "react";
import Box from "./BossBox";
const BossList = (props) => {
  const [Bosses, setBoss] = useState([]);

  useEffect(() => {
    setBoss(props.data);
  }, [props]);

  const select = (id) => {
    const Select_boss = Bosses.map((boss) => {
      if (boss.id === id) {
        return { ...boss, select: (boss.select = !boss.select) };
      }
      return boss;
    });
    props.updatedata(Select_boss);
  };

  return (
    <>
      <div
        className="bg-[#95BDFF] rounded-2xl mt-3 text-center"
        style={{
          boxShadow: "5px 5px 32px 2px rgba(0, 0, 0, 0.4)",
        }}
      >
        {Bosses.sort((a, b) => b.id - a.id).map((boss) => {
          return (
            <span onClick={() => select(boss.id)} key={boss.id}>
              <Box {...boss} key={boss.id} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default BossList;
