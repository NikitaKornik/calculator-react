import { useState } from "react";
import s from "./Btn.module.scss";

export function Btn({
  name, // имя (1, 2 ... *)
  color, // объект с данными кнопки (цвет, значение)
  globalActive, // активность кнопки (/ * + - =)
  setGlobalActive,
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
  id,
}) {
  const [isClicked, setIsClicked] = useState(false);

  if (id == "AC") {
    if (sign == "" && firstDigital == "") {
      name = "AC";
    } else if (sign != "" && secondDigital == "") {
      name = "AC";
    } else {
      name = "C";
    }
  }

  function onclick() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);

    if (color.origin == "tools") {
      if (name == "AC") {
        setFirstDigital("");
        setSecondDigital("");
        setSign("");
        setFinish(false);
        setDisplay("0");
        setGlobalActive("");
        console.log("All_clear");
      }
      if (name == "C") {
        if (sign == "") {
          setFirstDigital("");
        } else {
          setSecondDigital("");
        }
        setFinish(false);
        setDisplay("0");
        setGlobalActive(sign);
        name = "AC";
        console.log("Clear");
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
      setGlobalActive("");
      if (sign == "") {
        if (firstDigital == "" && name == "0") {
        } else {
          setFirstDigital(firstDigital + name);
        }
      } else if (sign != "") {
        if (secondDigital == "" && name == "0") {
        } else {
          setSecondDigital(secondDigital + name);
        }
      }
    }
    if (color.origin == "sign") {
      if (name != "=") {
        setGlobalActive(name);
      } else {
        setGlobalActive("");
      }

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
