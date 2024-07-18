import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Menu from "./FilterMenu";

const Filter = (props) => {
  const [characters, setCharacters] = useState(props.data);
  const [show, setShow] = useState(false);
  const [Filters, setFilters] = useState(props.filter);

  useEffect(() => {
    props.showed(show);
  }, [show]);

  useEffect(() => {
    setCharacters(props.data);
    setFilters(props.filter);
  }, [props]);

  const click = () => {
    setShow((current) => !current);
  };
  const close = () => {
    setShow(false);
  };

  const returnData = (newData) => {
    props.updatedata(newData);
  };

  const updateFilter = (newData) => {
    props.updatefilter(newData);
  };

  return (
    <div className="mt-5 inline-flex">
      <button
        className="bg-[#2CD3E1] text-white cursor-pointer select-none inline-flex
        p-1 pl-10 pt-2 pb-1 pr-10 text-2xl rounded-[30px] hover:shadow-btn ml-[5%]"
        style={{
          transition: "all .2s ease-in-out",
        }}
        onClick={click}
      >
        <FontAwesomeIcon
          icon={faFilter}
          className="text-2xl translate-y-1"
          style={{ color: "#ffffff", marginRight: ".5rem" }}
        />
        Filter
      </button>
      {show && (
        <Menu
          close={close}
          data={characters}
          filter={Filters}
          updatefilter={updateFilter}
          updatedata={returnData}
        />
      )}
    </div>
  );
};

export default Filter;
