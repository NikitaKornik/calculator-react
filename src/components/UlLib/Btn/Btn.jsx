import { useState } from "react";
import s from "./Btn.module.scss";

export function Btn({ name, color, globalActive, setGlobalActive }) {
  // const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  function onclick() {
    if (color.origin === "tools") {
      setGlobalActive(name);
    }
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  }
  // console.log(color.className);
  return (
    <div
      className={`${s.btn} ${color.className} ${
        globalActive === name ? s.active : ""
      } ${isClicked ? s.isClicked : ""}`}
      onClick={onclick}
      style={color}
    >
      {name}
    </div>
  );
}

// active
// ? `${s.btn} ${color.className} ${s.active} ${
//     isClicked ? s.isClicked : ""
//   }`
// : `${s.btn} ${color.className} ${isClicked ? s.isClicked : ""}`
