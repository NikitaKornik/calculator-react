import { useState } from "react";
import { Btn } from "../UlLib/Btn";
import btnS from "../UlLib/Btn/Btn.module.scss";
import s from "./GridField.module.scss";

const orange = {
  origin: "tools",
  className: btnS.orange,
  // backgroundColor: "#f6a902",
};
const grey = {
  className: btnS.grey,
  // backgroundColor: "#b0b0b0",
  // color: "#000000",
};
const darkgrey = {
  className: btnS.darkgrey,
  // backgroundColor: "#3c3c3c",
};

export function GridField(props) {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className={s.grid}>
      <div className={s.answer}>answer</div>
      <div className={`${s.cell} ${s.cell_ac}`}>
        <Btn color={grey} name="C" />
      </div>
      <div className={`${s.cell} ${s.cell_PlMn}`}>
        <Btn color={grey} name="+/-" />
      </div>
      <div className={`${s.cell} ${s.cell_p}`}>
        <Btn color={grey} name="%" />
      </div>
      <div className={`${s.cell} ${s.cell_div}`}>
        <Btn
          color={orange}
          name="/"
          globalActive={isActive}
          setGlobalActive={setIsActive}
        />
      </div>
      <div className={`${s.cell} ${s.cell_multip}`}>
        <Btn color={darkgrey} name="7" />
      </div>
      <div className={`${s.cell} ${s.cell_minus}`}>
        <Btn color={darkgrey} name="8" />
      </div>
      <div className={`${s.cell} ${s.cell_plus}`}>
        <Btn color={darkgrey} name="9" />
      </div>
      <div className={`${s.cell} ${s.cell_equals}`}>
        <Btn
          color={orange}
          name="*"
          globalActive={isActive}
          setGlobalActive={setIsActive}
        />
      </div>
      <div className={`${s.cell} ${s.cell_1}`}>
        <Btn color={darkgrey} name="4" />
      </div>
      <div className={`${s.cell} ${s.cell_2}`}>
        <Btn color={darkgrey} name="5" />
      </div>
      <div className={`${s.cell} ${s.cell_3}`}>
        <Btn color={darkgrey} name="6" />
      </div>
      <div className={`${s.cell} ${s.cell_4}`}>
        <Btn
          color={orange}
          name="-"
          globalActive={isActive}
          setGlobalActive={setIsActive}
        />
      </div>
      <div className={`${s.cell} ${s.cell_5}`}>
        <Btn color={darkgrey} name="1" />
      </div>
      <div className={`${s.cell} ${s.cell_6}`}>
        <Btn color={darkgrey} name="2" />
      </div>
      <div className={`${s.cell} ${s.cell_7}`}>
        <Btn color={darkgrey} name="3" />
      </div>
      <div className={`${s.cell} ${s.cell_8}`}>
        <Btn
          color={orange}
          name="+"
          globalActive={isActive}
          setGlobalActive={setIsActive}
        />
      </div>
      <div className={`${s.cell} ${s.cell_9}`}>
        <Btn color={darkgrey} name="0" />
      </div>
      <div className={`${s.cell} ${s.cell_0}`}>
        <Btn color={darkgrey} name="," />
      </div>
      <div className={`${s.cell} ${s.cell_dot}`}>
        <Btn
          color={orange}
          name="="
          globalActive={isActive}
          setGlobalActive={setIsActive}
        />
      </div>
    </div>
  );
}
