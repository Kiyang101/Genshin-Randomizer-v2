import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const icon_Sword = require("./image/Icon_weapon/Sword.webp");
const icon_Bow = require("./image/Icon_weapon/Bow.webp");
const icon_Catalyst = require("./image/Icon_weapon/Catalyst.webp");
const icon_Claymore = require("./image/Icon_weapon/Claymore.webp");
const icon_Pole = require("./image/Icon_weapon/Pole.webp");

const icon_Anemo = require("./image/Elements/Anemo.webp");
const icon_Cryo = require("./image/Elements/Cryo.webp");
const icon_Dendro = require("./image/Elements/Dendro.webp");
const icon_Electro = require("./image/Elements/Electro.webp");
const icon_Geo = require("./image/Elements/Geo.webp");
const icon_Hydro = require("./image/Elements/Hydro.webp");
const icon_Pyro = require("./image/Elements/Pyro.webp");

const Menu = (props) => {
  const [characters, setCharacters] = useState(props.data);
  const [Filters, setFilters] = useState(props.filter);

  const [show4, setshow4] = useState(Filters.show4);
  const [show5, setshow5] = useState(Filters.show5);

  const [showSword, setshowSword] = useState(Filters.showSword);
  const [showClaymore, setshowClaymore] = useState(Filters.showClaymore);
  const [showPolearm, setshowPolearm] = useState(Filters.showPolearm);
  const [showBow, setshowBow] = useState(Filters.showBow);
  const [showCatalyst, setshowCatalyst] = useState(Filters.showCatalyst);

  const [showAnemo, setshowAnemo] = useState(Filters.showAnemo);
  const [showCryo, setshowCryo] = useState(Filters.showCryo);
  const [showDendro, setshowDendro] = useState(Filters.showDendro);
  const [showElectro, setshowElectro] = useState(Filters.showElectro);
  const [showGeo, setshowGeo] = useState(Filters.showGeo);
  const [showHydro, setshowHydro] = useState(Filters.showHydro);
  const [showPyro, setshowPyro] = useState(Filters.showPyro);

  Menu.propTypes = {
    updatedata: PropTypes.func,
  };

  useEffect(() => {
    setCharacters(props.data);
    setFilters(props.filter);
  }, [props]);

  useEffect(() => {
    setshow4(Filters.show4);
    setshow5(Filters.show5);
    setshowSword(Filters.showSword);
    setshowClaymore(Filters.showClaymore);
    setshowPolearm(Filters.showPolearm);
    setshowBow(Filters.showBow);
    setshowCatalyst(Filters.showCatalyst);
    setshowAnemo(Filters.showAnemo);
    setshowCryo(Filters.showCryo);
    setshowDendro(Filters.showDendro);
    setshowElectro(Filters.showElectro);
    setshowGeo(Filters.showGeo);
    setshowHydro(Filters.showHydro);
    setshowPyro(Filters.showPyro);
  }, [Filters]);

  const click = () => {
    props.close(false);
  };

  const showedallrarity = () => {
    const Updated_Characters = characters.map((char) => {
      if (char.rarity === 5) {
        return { ...char, display: { ...char.display, disFive: true } };
      }
      if (char.rarity === 4) {
        return { ...char, display: { ...char.display, disFour: true } };
      }
      return char;
    });
    console.log(Updated_Characters);
    props.updatedata(Updated_Characters);
    const upDateFilter = { ...Filters, show4: true, show5: true };
    props.updatefilter(upDateFilter);
  };

  const showed4 = () => {
    if (show4 && show5) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 5) {
          return { ...char, display: { ...char.display, disFive: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show5: false };
      props.updatefilter(upDateFilter);
    }

    if (show4 && !show5) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 5) {
          return { ...char, display: { ...char.display, disFive: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show5: true };
      props.updatefilter(upDateFilter);
    }

    if (!show4) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 4) {
          return { ...char, display: { ...char.display, disFour: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show4: true };
      props.updatefilter(upDateFilter);
    }
  };

  const showed5 = () => {
    if (show4 && show5) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 4) {
          return { ...char, display: { ...char.display, disFour: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show4: false };
      props.updatefilter(upDateFilter);
    }

    if (!show4 && show5) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 4) {
          return { ...char, display: { ...char.display, disFour: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show4: true };
      props.updatefilter(upDateFilter);
    }

    if (!show5) {
      const Updated_Characters = characters.map((char) => {
        if (char.rarity === 5) {
          return { ...char, display: { ...char.display, disFive: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = { ...Filters, show5: true };
      props.updatefilter(upDateFilter);
    }
  };

  const allWeaponsShown =
    showSword && showClaymore && showPolearm && showBow && showCatalyst;

  const showedallweapontypes = () => {
    const Updated_Characters = characters.map((char) => {
      if (char.display.disSword === false) {
        return { ...char, display: { ...char.display, disSword: true } };
      }
      if (char.display.disClaymore === false) {
        return { ...char, display: { ...char.display, disClaymore: true } };
      }
      if (char.display.disPolearm === false) {
        return { ...char, display: { ...char.display, disPolearm: true } };
      }
      if (char.display.disBow === false) {
        return { ...char, display: { ...char.display, disBow: true } };
      }
      if (char.display.disCatalyst === false) {
        return { ...char, display: { ...char.display, disCatalyst: true } };
      }
      return char;
    });
    props.updatedata(Updated_Characters);
    const upDateFilter = {
      ...Filters,
      showSword: true,
      showClaymore: true,
      showBow: true,
      showPolearm: true,
      showCatalyst: true,
    };
    props.updatefilter(upDateFilter);
  };

  const showedSword = () => {
    if (allWeaponsShown) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: false } };
        }
        if (char.display.disPolearm === true) {
          return { ...char, display: { ...char.display, disPolearm: false } };
        }
        if (char.display.disBow === true) {
          return { ...char, display: { ...char.display, disBow: false } };
        }
        if (char.display.disCatalyst === true) {
          return { ...char, display: { ...char.display, disCatalyst: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: false,
        showBow: false,
        showPolearm: false,
        showCatalyst: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      showSword &&
      !showClaymore &&
      !showPolearm &&
      !showBow &&
      !showCatalyst
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: true,
        showBow: true,
        showPolearm: true,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showSword) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === true) {
          return { ...char, display: { ...char.display, disSword: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showSword) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedClaymore = () => {
    if (allWeaponsShown) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === true) {
          return { ...char, display: { ...char.display, disSword: false } };
        }
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === true) {
          return { ...char, display: { ...char.display, disPolearm: false } };
        }
        if (char.display.disBow === true) {
          return { ...char, display: { ...char.display, disBow: false } };
        }
        if (char.display.disCatalyst === true) {
          return { ...char, display: { ...char.display, disCatalyst: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: false,
        showClaymore: true,
        showBow: false,
        showPolearm: false,
        showCatalyst: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showSword &&
      showClaymore &&
      !showPolearm &&
      !showBow &&
      !showCatalyst
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: true,
        showBow: true,
        showPolearm: true,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showClaymore) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showClaymore: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showClaymore) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showClaymore: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedPolearm = () => {
    if (allWeaponsShown) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === true) {
          return { ...char, display: { ...char.display, disSword: false } };
        }
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: false } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === true) {
          return { ...char, display: { ...char.display, disBow: false } };
        }
        if (char.display.disCatalyst === true) {
          return { ...char, display: { ...char.display, disCatalyst: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: false,
        showClaymore: false,
        showPolearm: true,
        showBow: false,
        showCatalyst: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showSword &&
      !showClaymore &&
      showPolearm &&
      !showBow &&
      !showCatalyst
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: true,
        showPolearm: true,
        showBow: true,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showPolearm) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disPolearm === true) {
          return { ...char, display: { ...char.display, disPolearm: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showPolearm: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showPolearm) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showPolearm: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedBow = () => {
    if (allWeaponsShown) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === true) {
          return { ...char, display: { ...char.display, disSword: false } };
        }
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: false } };
        }
        if (char.display.disPolearm === true) {
          return { ...char, display: { ...char.display, disPolearm: false } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === true) {
          return { ...char, display: { ...char.display, disCatalyst: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: false,
        showClaymore: false,
        showPolearm: false,
        showBow: true,
        showCatalyst: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showSword &&
      !showClaymore &&
      !showPolearm &&
      showBow &&
      !showCatalyst
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: true,
        showPolearm: true,
        showBow: true,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showBow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disBow === true) {
          return { ...char, display: { ...char.display, disBow: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showBow: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showBow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showBow: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedCatalyst = () => {
    if (allWeaponsShown) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === true) {
          return { ...char, display: { ...char.display, disSword: false } };
        }
        if (char.display.disClaymore === true) {
          return { ...char, display: { ...char.display, disClaymore: false } };
        }
        if (char.display.disPolearm === true) {
          return { ...char, display: { ...char.display, disPolearm: false } };
        }
        if (char.display.disBow === true) {
          return { ...char, display: { ...char.display, disBow: false } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: false,
        showClaymore: false,
        showPolearm: false,
        showBow: false,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showSword &&
      !showClaymore &&
      !showPolearm &&
      !showBow &&
      showCatalyst
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disSword === false) {
          return { ...char, display: { ...char.display, disSword: true } };
        }
        if (char.display.disClaymore === false) {
          return { ...char, display: { ...char.display, disClaymore: true } };
        }
        if (char.display.disPolearm === false) {
          return { ...char, display: { ...char.display, disPolearm: true } };
        }
        if (char.display.disBow === false) {
          return { ...char, display: { ...char.display, disBow: true } };
        }
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showSword: true,
        showClaymore: true,
        showPolearm: true,
        showBow: true,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showCatalyst) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disCatalyst === true) {
          return { ...char, display: { ...char.display, disCatalyst: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showCatalyst: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showCatalyst) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disCatalyst === false) {
          return { ...char, display: { ...char.display, disCatalyst: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showCatalyst: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const allElementsShow =
    showAnemo &&
    showCryo &&
    showDendro &&
    showElectro &&
    showGeo &&
    showHydro &&
    showPyro;

  const showedallelements = () => {
    const Updated_Characters = characters.map((char) => {
      if (char.display.disAnemo === false) {
        return { ...char, display: { ...char.display, disAnemo: true } };
      }
      if (char.display.disCryo === false) {
        return { ...char, display: { ...char.display, disCryo: true } };
      }
      if (char.display.disDendro === false) {
        return { ...char, display: { ...char.display, disDendro: true } };
      }
      if (char.display.disElectro === false) {
        return { ...char, display: { ...char.display, disElectro: true } };
      }
      if (char.display.disGeo === false) {
        return { ...char, display: { ...char.display, disGeo: true } };
      }
      if (char.display.disHydro === false) {
        return { ...char, display: { ...char.display, disHydro: true } };
      }
      if (char.display.disPyro === false) {
        return { ...char, display: { ...char.display, disPyro: true } };
      }
      return char;
    });
    props.updatedata(Updated_Characters);
    const upDateFilter = {
      ...Filters,
      showAnemo: true,
      showCryo: true,
      showDendro: true,
      showElectro: true,
      showGeo: true,
      showHydro: true,
      showPyro: true,
    };
    props.updatefilter(upDateFilter);
  };

  const showedAnemo = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: false,
        showDendro: false,
        showElectro: false,
        showGeo: false,
        showHydro: false,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      showAnemo &&
      !showCryo &&
      !showDendro &&
      !showElectro &&
      !showGeo &&
      !showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showAnemo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showAnemo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedCryo = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: true,
        showDendro: false,
        showElectro: false,
        showGeo: false,
        showHydro: false,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      showCryo &&
      !showDendro &&
      !showElectro &&
      !showGeo &&
      !showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showCryo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showCryo: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showCryo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showCryo: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedDendro = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: false,
        showDendro: true,
        showElectro: false,
        showGeo: false,
        showHydro: false,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      !showCryo &&
      showDendro &&
      !showElectro &&
      !showGeo &&
      !showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showDendro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showDendro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showDendro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showDendro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedElectro = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: false,
        showDendro: false,
        showElectro: true,
        showGeo: false,
        showHydro: false,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      !showCryo &&
      !showDendro &&
      showElectro &&
      !showGeo &&
      !showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showElectro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showElectro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showElectro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showElectro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedGeo = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: false,
        showDendro: false,
        showElectro: false,
        showGeo: true,
        showHydro: false,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      !showCryo &&
      !showDendro &&
      !showElectro &&
      showGeo &&
      !showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showGeo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showGeo: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showGeo) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showGeo: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedHydro = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: false,
        showDendro: false,
        showElectro: false,
        showGeo: false,
        showHydro: true,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      !showCryo &&
      !showDendro &&
      !showElectro &&
      !showGeo &&
      showHydro &&
      !showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showHydro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showHydro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showHydro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showHydro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  const showedPyro = () => {
    if (allElementsShow) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === true) {
          return { ...char, display: { ...char.display, disAnemo: false } };
        }
        if (char.display.disCryo === true) {
          return { ...char, display: { ...char.display, disCryo: false } };
        }
        if (char.display.disDendro === true) {
          return { ...char, display: { ...char.display, disDendro: false } };
        }
        if (char.display.disElectro === true) {
          return { ...char, display: { ...char.display, disElectro: false } };
        }
        if (char.display.disGeo === true) {
          return { ...char, display: { ...char.display, disGeo: false } };
        }
        if (char.display.disHydro === true) {
          return { ...char, display: { ...char.display, disHydro: false } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: false,
        showCryo: false,
        showDendro: false,
        showElectro: false,
        showGeo: false,
        showHydro: false,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (
      !showAnemo &&
      !showCryo &&
      !showDendro &&
      !showElectro &&
      !showGeo &&
      !showHydro &&
      showPyro
    ) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disAnemo === false) {
          return { ...char, display: { ...char.display, disAnemo: true } };
        }
        if (char.display.disCryo === false) {
          return { ...char, display: { ...char.display, disCryo: true } };
        }
        if (char.display.disDendro === false) {
          return { ...char, display: { ...char.display, disDendro: true } };
        }
        if (char.display.disElectro === false) {
          return { ...char, display: { ...char.display, disElectro: true } };
        }
        if (char.display.disGeo === false) {
          return { ...char, display: { ...char.display, disGeo: true } };
        }
        if (char.display.disHydro === false) {
          return { ...char, display: { ...char.display, disHydro: true } };
        }
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showAnemo: true,
        showCryo: true,
        showDendro: true,
        showElectro: true,
        showGeo: true,
        showHydro: true,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (showPyro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disPyro === true) {
          return { ...char, display: { ...char.display, disPyro: false } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showPyro: false,
      };
      props.updatefilter(upDateFilter);
      return;
    }

    if (!showPyro) {
      const Updated_Characters = characters.map((char) => {
        if (char.display.disPyro === false) {
          return { ...char, display: { ...char.display, disPyro: true } };
        }
        return char;
      });
      props.updatedata(Updated_Characters);
      const upDateFilter = {
        ...Filters,
        showPyro: true,
      };
      props.updatefilter(upDateFilter);
      return;
    }
  };

  return (
    <>
      <div
        className="z-[45] fixed top-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,.7)] m-0 p-0 left-0 right-0"
        onClick={click}
      ></div>
      <div
        className="fixed top-[15%] rounded-[10px] z-50 m-auto left-[10%] bottom-auto right-[10%] select-none"
        style={{
          background: "linear-gradient(#82AAE3, #91D8E4, #BFEAF5, #EAFDFC)",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          <button
            className="float-right m-1 cursor-pointer mr-3"
            onClick={click}
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#fff", fontSize: "2.3rem" }}
            />
          </button>
          <h1
            className="text-center mt-2 mb-2 text-[#f0f8ff] text-4xl"
            style={{ textShadow: "0 5px 5px #444444, 0 -2px 1px #969696" }}
          >
            Filter
          </h1>
        </div>
        <div className="ml-[10%] mt-5">
          <ul className="mb-5">
            <li className="inline-flex">
              <h1
                className="text-[#f0f8ff]"
                style={{ textShadow: "0 5px 5px #444444, 0 -2px 1px #969696" }}
              >
                Rarity
              </h1>
              <button
                className="rounded-[5px] text-xl m-2 pl-2 pr-2"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor:
                    Filters.show4 && Filters.show5 ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedallrarity}
              >
                all
              </button>
            </li>
            <li>
              <button
                className="rounded-[5px] text-xl mr-1 ml-1 pl-2 pr-2"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.show4 ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showed4}
              >
                4
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd700" }} />
              </button>

              <button
                className="rounded-[5px] text-xl mr-1 ml-1 pl-2 pr-2"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.show5 ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showed5}
              >
                5
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffd700", fontSize: "20px" }}
                />
              </button>
            </li>
            <li className="mt-2 inline-flex">
              <h1
                className="text-[#f0f8ff]"
                style={{ textShadow: "0 5px 5px #444444, 0 -2px 1px #969696" }}
              >
                Weapon types
              </h1>
              <button
                className="rounded-[5px] text-xl m-2 pl-2 pr-2"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor:
                    Filters.showSword &&
                    Filters.showClaymore &&
                    Filters.showBow &&
                    Filters.showPolearm &&
                    Filters.showCatalyst
                      ? "#97DEFF"
                      : "#E0F4FF",
                }}
                onClick={showedallweapontypes}
              >
                all
              </button>
            </li>
            <li className="mt-1">
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showSword ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedSword}
              >
                <img
                  src={icon_Sword}
                  alt="icon_Sword"
                  className="h-8 bg-[#62CDFF] rounded-[5px]"
                />
                <h1 className="mt-0 mb-0 ml-1">Sword</h1>
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showClaymore ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedClaymore}
              >
                <img
                  src={icon_Claymore}
                  alt="icon_Claymore"
                  className="h-8 bg-[#62CDFF] rounded-[5px]"
                />
                <h1 className="mt-0 mb-0 ml-1">Claymore</h1>
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showPolearm ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedPolearm}
              >
                <img
                  src={icon_Pole}
                  alt="icon_Pole"
                  className="h-8 bg-[#62CDFF] rounded-[5px]"
                />
                <h1 className="mt-0 mb-0 ml-1">Polearm</h1>
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showBow ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedBow}
              >
                <img
                  src={icon_Bow}
                  alt="icon_Bow"
                  className="h-8 bg-[#62CDFF] rounded-[5px]"
                />
                <h1 className="mt-0 mb-0 ml-1">Bow</h1>
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showCatalyst ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedCatalyst}
              >
                <img
                  src={icon_Catalyst}
                  alt="icon_Catalyst"
                  className="h-8 bg-[#62CDFF] rounded-[5px]"
                />
                <h1 className="mt-0 mb-0 ml-1">Catalyst</h1>
              </button>
            </li>
            <li className="mt-2 inline-flex">
              <h1
                className="text-[#f0f8ff]"
                style={{ textShadow: "0 5px 5px #444444, 0 -2px 1px #969696" }}
              >
                Elements
              </h1>
              <button
                className="rounded-[5px] text-xl m-2 pl-2 pr-2"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor:
                    Filters.showAnemo &&
                    Filters.showCryo &&
                    Filters.showDendro &&
                    Filters.showElectro &&
                    Filters.showGeo &&
                    Filters.showHydro &&
                    Filters.showPyro
                      ? "#97DEFF"
                      : "#E0F4FF",
                }}
                onClick={showedallelements}
              >
                all
              </button>
            </li>
            <li className="mt-1">
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showAnemo ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedAnemo}
              >
                <img
                  src={icon_Anemo}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showCryo ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedCryo}
              >
                <img
                  src={icon_Cryo}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showDendro ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedDendro}
              >
                <img
                  src={icon_Dendro}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showElectro ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedElectro}
              >
                <img
                  src={icon_Electro}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showGeo ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedGeo}
              >
                <img
                  src={icon_Geo}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showHydro ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedHydro}
              >
                <img
                  src={icon_Hydro}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
              <button
                className="rounded-[10px] text-xl mr-1 ml-1 pl-2 pr-2 inline-flex p-1"
                style={{
                  boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
                  backgroundColor: Filters.showPyro ? "#97DEFF" : "#E0F4FF",
                }}
                onClick={showedPyro}
              >
                <img
                  src={icon_Pyro}
                  alt="icon_Sword"
                  className="h-10 rounded-[5px]"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
