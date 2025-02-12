import { useEffect, useState } from "react";

type DebouncedInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
};

const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}: DebouncedInputProps) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.5s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebouncedInput;
