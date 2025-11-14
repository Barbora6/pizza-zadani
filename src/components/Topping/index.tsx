import Check from "../Check";
import type { ITopping } from "../../models/Topping";
import "./style.css";
// import { useState } from "react";

interface IToppingProps {
  topping: ITopping;
  onToggle: (name: string) => void;
}

const Topping = ({ topping, onToggle }: IToppingProps) => {
  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // setChecked(!checked);
    onToggle(topping.name);
  };

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={handleChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
