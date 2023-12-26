import { useState } from "react";
import s from "./Btn.module.scss";

export function Btn({
  name, // имя (1, 2 ... *)
  color, // объект с данными кнопки (цвет, значение)
  globalActive, // активность кнопки (/ * + - =)
  setGlobalActive, // установить активность кнопки (/ * + - =)
  firstDigital, // первое числе
  setFirstDigital, // установить первое число
  secondDigital, // второе число
  setSecondDigital, // установить второе число
  sign, // оператор
  setSign, // установить оператор
  finish, // закончить и приступить к вичислению
  setFinish, // установить значение окончания
  setDisplay, // вывести на экран
  id, // id кнопок
}) {
  const [isClicked, setIsClicked] = useState(false); // для анимации клика по кнопке

  // поведение кнопки отчистки
  if (id == "AC") {
    if (sign == "" && firstDigital == "") {
      name = "AC";
    } else if (sign != "" && secondDigital == "") {
      name = "AC";
    } else {
      name = "C";
    }
  }

  // при клике на кнопку
  function onclick() {
    // анимация клика
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100); // скорость анимации

    // если кнопка относится к "tools" (инструментам)
    if (color.origin == "tools") {
      // действия при полной отчистке
      if (name == "AC") {
        setFirstDigital("");
        setSecondDigital("");
        setSign("");
        setFinish(false);
        setDisplay("0");
        setGlobalActive("");
      }
      // действия при частичной отчистке
      if (name == "C") {
        if (sign == "") {
          // если оператор пустой
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
      // умножает число на "-1" (получаем отрицательное из положительного и наоборот)
      if (name == "+/-") {
        if (sign != "") {
          if (secondDigital != "") {
            setSecondDigital(secondDigital * -1);
          }
        } else {
          if (firstDigital != "") {
            setFirstDigital(firstDigital * -1);
          }
        }
        if (sign != "" && secondDigital == "") {
          setFirstDigital(firstDigital * -1);
        }
      }
      // делит на 100 (получаем 1%)
      if (name == "%") {
        if (sign != "") {
          if (secondDigital != "") {
            setSecondDigital(secondDigital / 100);
          }
        } else {
          if (firstDigital != "") {
            setFirstDigital(firstDigital / 100);
          }
        }
        if (sign != "" && secondDigital == "") {
          setFirstDigital(firstDigital / 100);
        }
      }
    }
    // если кнопка относится к "digital" (числам)
    if (color.origin == "digital") {
      setGlobalActive("");
      if (sign == "") {
        if (name == "0") {
          if (firstDigital == "") {
            setFirstDigital(firstDigital + name);
          }
          if (firstDigital == "0") {
            setFirstDigital((firstDigital = name));
          }
          if (firstDigital != "0") {
            setFirstDigital(firstDigital + name);
          }
        }
        if (name == ".") {
          if (firstDigital == "") {
            setFirstDigital("0.");
          } else if (firstDigital.includes(name)) {
          } else {
            setFirstDigital(firstDigital + name);
          }
        }
        if (name != "0" && name != ".") {
          if (firstDigital == "0") {
            setFirstDigital((firstDigital = name));
          } else setFirstDigital(firstDigital + name);
        }
      }
      if (sign != "") {
        if (name == "0") {
          if (secondDigital == "") {
            setSecondDigital(secondDigital + name);
          }
          if (secondDigital == "0") {
            setSecondDigital((secondDigital = name));
          }
          if (secondDigital != "0") {
            setSecondDigital(secondDigital + name);
          }
        }
        if (name == ".") {
          if (secondDigital == "") {
            setSecondDigital("0.");
          } else if (secondDigital.includes(name)) {
          } else {
            setSecondDigital(secondDigital + name);
          }
        }
        if (name != "0" && name != ".") {
          if (secondDigital == "0") {
            setSecondDigital((secondDigital = name));
          } else setSecondDigital(secondDigital + name);
        }
      }

      //   if (secondDigital == "" && name == "0" && name != ".") {
      //     setSecondDigital(secondDigital + name);
      //   } else if (secondDigital == "0") {
      //     setSecondDigital((secondDigital = name));
      //   } else if (secondDigital != "0") {
      //     setSecondDigital(secondDigital + name);
      //   }
      // }
      // if (name == ".") {
      //   if (firstDigital == "") {
      //     setFirstDigital("0.");
      //   } else if (firstDigital.includes(name)) {
      //     console.log('display уже содержит "."');
      //   }
      // }
    }
    //если кнопка относится к "sign" (операторам)
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

  // информация для консоли
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
