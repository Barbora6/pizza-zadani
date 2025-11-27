import "./style.css";

interface ICheckProps {
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

const Check = ({ checked, onCheck }: ICheckProps) => {
  return (
    <button className="check" onClick={() => onCheck(!checked)}>
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
