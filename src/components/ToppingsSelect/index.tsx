import { useState } from "react";
import type { ITopping } from "../../models/Topping";
import Topping from "../Topping";
import "./style.css";

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [pizzaToppings, setPizzaToppings] = useState<ITopping[]>(toppings);

  const handleToppingChange = (name: string, selected: boolean) => {
    const newToppings = [...pizzaToppings];
    const topping = newToppings.find((top) => top.name === name);
    if (topping) {
      topping.selected = selected;
    } else {
      console.log("Ingredience neexistuje");
    }
    setPizzaToppings(newToppings);
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {pizzaToppings.map((topping) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToppingChange={handleToppingChange}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
