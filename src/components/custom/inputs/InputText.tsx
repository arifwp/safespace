import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { ChangeEventHandler, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

export const InputText = ({
  value,
  onChange,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <Input
      value={value ?? ""}
      onChange={onChange}
      placeholder={placeholder ? placeholder : undefined}
      className={clsx("w-full", className)}
      {...rest}
    />
  );
};
