import "./style.css";

interface ICheckProps {
  checked: boolean;
  onChange: () => void;
}

const Check = ({ checked, onChange }: ICheckProps) => {
  const handleClick = () => {
    onChange();
  };

  return (
    <button className="check" onClick={handleClick}>
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
