import "./style.css";

interface ICheckProps {
  checked: boolean;
  onCheck: () => void;
}

const Check = ({ checked, onCheck }: ICheckProps) => {
  return (
    <button className="check" onClick={onCheck}>
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
