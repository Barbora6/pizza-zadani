import Check from "../Check";
import type { ITopping } from "../../models/Topping";
import "./style.css";

interface IToppingProps {
  topping: ITopping;
  onToppingChange: (name: string, selected: boolean) => void;
}

const Topping = ({ topping, onToppingChange }: IToppingProps) => {
  const handleChange = (checked: boolean) => {
    onToppingChange(topping.name, checked);
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
