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
      name: "C",
      color: grey,
    },
    {
      name: "+/-",
      color: grey,
    },
    {
      name: "%",
      color: grey,
    },
    {
      name: "/",
      color: orange,
    },
    {
      name: "7",
      color: darkgrey,
    },
    {
      name: "8",
      color: darkgrey,
    },
    {
      name: "9",
      color: darkgrey,
    },
    {
      name: "*",
      color: orange,
    },
    {
      name: "4",
      color: darkgrey,
    },
    {
      name: "5",
      color: darkgrey,
    },
    {
      name: "6",
      color: darkgrey,
    },
    {
      name: "-",
      color: orange,
    },
    {
      name: "1",
      color: darkgrey,
    },
    {
      name: "2",
      color: darkgrey,
    },
    {
      name: "3",
      color: darkgrey,
    },
    {
      name: "+",
      color: orange,
    },
    {
      name: "0",
      color: darkgrey,
    },
    {
      name: ".",
      color: darkgrey,
    },
    {
      name: "=",
      color: orange,
    },
  ];

  const [isActive, setIsActive] = useState(1);

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

  const renderBtns = allBtns.map((e, index) => (
    <div className={`${s.cell} ${e.name == 0 ? s.cell_0 : ""}`}>
      <Btn
        color={e.color}
        name={e.name}
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
      />
    </div>
  ));
  return (
    <div className={s.grid}>
      <div className={s.answer}>{display}</div>
      {renderBtns}
    </div>
  );
}
