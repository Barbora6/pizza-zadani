import { useState } from "react";
import type { ITopping } from "../../models/Topping";
import Topping from "../Topping";
import "./style.css";

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [selectedToppings, setSelectedToppings] =
    useState<ITopping[]>(toppings);

  const handleToggle = (name: string) => {
    setSelectedToppings((even) =>
      even.map((t) => (t.name === name ? { ...t, selected: !t.selected } : t))
    );
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
