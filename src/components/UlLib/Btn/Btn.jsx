import { useState } from "react";
import s from "./Btn.module.scss";

export function Btn({
  name, // имя (1, 2 ... *)
  color, // объект с данными кнопки (цвет, значение)
  globalActive, // активность кнопки (/ * + - =)
  //вся информация о первом числе, втором числе, операторе, заключения
  firstDigital,
  setFirstDigital,
  secondDigital,
  setSecondDigital,
  sign,
  setSign,
  finish,
  setFinish,
  setDisplay,
}) {
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  function onclick() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);

    if (color.origin == "tools") {
      if (name == "C") {
        setFirstDigital("");
        setSecondDigital("");
        setSign("");
        setFinish(false);
        setDisplay("0");
        console.log("clear");
      }
      if (name == "+/-") {
        if (sign != "") {
          setSecondDigital(secondDigital * -1);
        } else {
          setFirstDigital(firstDigital * -1);
        }
      }
      if (name == "%") {
        if (sign != "") {
          setSecondDigital(secondDigital / 100);
        } else {
          setFirstDigital(firstDigital / 100);
        }
      }
    }
    if (color.origin == "digital") {
      if (sign == "") {
        setFirstDigital(firstDigital + name);
      } else if (sign != "") {
        setSecondDigital(secondDigital + name);
      }
    }
    if (color.origin == "sign") {
      if (sign == "" && firstDigital != "" && name != "=") {
        setSign(name);
      }
      if (sign != "" && secondDigital != "") {
        setFinish(true);
      }
      if (sign != "" && secondDigital == "") {
        setSign(name);
      }
    }
  }
  //вывод на дисплей
  if (firstDigital == "" && secondDigital == "") {
    setDisplay("0");
  }
  if (secondDigital == "") {
    if (firstDigital == "") {
      setDisplay("0");
    } else {
      setDisplay(firstDigital);
    }
  } else {
    setDisplay(secondDigital);
  }

  console.log(
    `firstDigital: ${firstDigital} sign: ${sign}, secondDigital: ${secondDigital} setFinish: ${finish}`
  );
  //анимация
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
