import { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, name, value, onChange }: InputProps) {
  return (
    <>
      <span className="input-label">{label}</span>
      <input
        type="text"
        placeholder={label}
        name={name}
        id={name}
        className="text-input"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
