import { FieldErrors, FieldValues } from "react-hook-form";
import type { FormItemProps } from "antd";

export const handleValidateError = <T extends FieldValues>(
  errors: FieldErrors<T>,
  name: keyof T,
  defaultHelp?: string
): Pick<FormItemProps, 'hasFeedback' | 'validateStatus' | 'help'> => {
  const fieldError = errors?.[name];
  const message = fieldError?.message as React.ReactNode;
  return {
    hasFeedback: !!message,
    validateStatus: message ? 'error' : undefined,
    help: message || defaultHelp || '',
  };
};