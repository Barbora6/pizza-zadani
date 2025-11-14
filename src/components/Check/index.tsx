import "./style.css";

interface ICheckProps {
  checked: boolean;
  onChange: () => void;
}

const Check = ({ checked, onChange }: ICheckProps) => {
  return (
    <button className="check" onClick={onChange}>
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
