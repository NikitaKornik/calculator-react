import { useState } from "react";
import { Btn } from "../UlLib/Btn";
import btnS from "../UlLib/Btn/Btn.module.scss";
import s from "./GridField.module.scss";

const orange = {
  origin: "sign",
  className: btnS.orange,
  // backgroundColor: "#f6a902",
};
const grey = {
  origin: "tools",
  className: btnS.grey,
  // backgroundColor: "#b0b0b0",
  // color: "#000000",
};
const darkgrey = {
  origin: "digital",
  className: btnS.darkgrey,
  // backgroundColor: "#3c3c3c",
};

export function GridField(props) {
  const allBtns = [
    {
      name: "AC",
      color: grey,
      id: "AC",
    },
    {
      name: "+/-",
      color: grey,
      id: "+/-",
    },
    {
      name: "%",
      color: grey,
      id: "%",
    },
    {
      name: "/",
      color: orange,
      id: "/",
    },
    {
      name: "7",
      color: darkgrey,
      id: "7",
    },
    {
      name: "8",
      color: darkgrey,
      id: "8",
    },
    {
      name: "9",
      color: darkgrey,
      id: "9",
    },
    {
      name: "*",
      color: orange,
      id: "*",
    },
    {
      name: "4",
      color: darkgrey,
      id: "4",
    },
    {
      name: "5",
      color: darkgrey,
      id: "5",
    },
    {
      name: "6",
      color: darkgrey,
      id: "6",
    },
    {
      name: "-",
      color: orange,
      id: "-",
    },
    {
      name: "1",
      color: darkgrey,
      id: "1",
    },
    {
      name: "2",
      color: darkgrey,
      id: "2",
    },
    {
      name: "3",
      color: darkgrey,
      id: "3",
    },
    {
      name: "+",
      color: orange,
      id: "+",
    },
    {
      name: "0",
      color: darkgrey,
      id: "0",
    },
    {
      name: ".",
      color: darkgrey,
      id: ".",
    },
    {
      name: "=",
      color: orange,
      id: "=",
    },
  ];

  const [isActive, setIsActive] = useState("");

  const [firstDigital, setFirstDigital] = useState("");
  const [secondDigital, setSecondDigital] = useState("");
  const [sign, setSign] = useState("");
  const [finish, setFinish] = useState(false);
  const [display, setDisplay] = useState("0");

  if (finish == true) {
    switch (sign) {
      case "+":
        setFirstDigital(+firstDigital + +secondDigital);
        break;
      case "-":
        setFirstDigital(+firstDigital - +secondDigital);
        break;
      case "*":
        setFirstDigital(+firstDigital * +secondDigital);
        break;
      case "/":
        setFirstDigital(+firstDigital / +secondDigital);
        break;
    }
    setFinish(false);
    setSecondDigital("");
    if (sign == "=") {
      setSign("");
    }
  }
  if (firstDigital == Infinity) {
    setFirstDigital("Серьезно?");
  }
  const renderBtns = allBtns.map((e, index) => (
    <div className={`${s.cell} ${e.name == 0 ? s.cell_0 : ""}`}>
      <Btn
        color={e.color}
        name={e.name}
        id={e.id}
        firstDigital={firstDigital}
        setFirstDigital={setFirstDigital}
        secondDigital={secondDigital}
        setSecondDigital={setSecondDigital}
        sign={sign}
        setSign={setSign}
        finish={finish}
        setFinish={setFinish}
        setDisplay={setDisplay}
        globalActive={isActive}
        setGlobalActive={setIsActive}
      />
    </div>
  ));
  function answerDelete() {
    if (sign == "") {
      setFirstDigital(display.slice(0, -1));
    } else {
      setSecondDigital(display.slice(0, -1));
    }
  }
  return (
    <div className={s.grid}>
      <div className={s.answer} onClick={answerDelete}>
        {display}
      </div>
      {renderBtns}
    </div>
  );
}
