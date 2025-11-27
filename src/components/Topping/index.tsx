import Check from "../Check";
import type { ITopping } from "../../models/Topping";
import "./style.css";
// import { useState } from "react";

interface IToppingProps {
  topping: ITopping;
  onToppingChange: (name: string) => void;
}

const Topping = ({ topping, onToppingChange }: IToppingProps) => {
  const handleChange = () => {
    onToppingChange(topping.name);
  };

  return (
    <div className="topping">
      <Check checked={topping.selected} onCheck={handleChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
