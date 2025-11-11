import Check from "../Check";
import type { ITopping } from "../../models/Topping";
import "./style.css";
import { useState } from "react";

interface IToppingProps {
  topping: ITopping;
}

const Topping = ({ topping }: IToppingProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="topping">
      <Check checked={checked} onChange={handleChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
