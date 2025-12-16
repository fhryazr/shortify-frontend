import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { AnyFieldApi } from "@tanstack/react-form";

interface FormFieldProps {
  field: AnyFieldApi;
  icon?: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FormField = ({
  field,
  label,
  type,
  value,
  placeholder,
  onChange,
  icon,
  className = "",
}: FormFieldProps) => {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <InputGroup className={`rounded-lg h-10 ${className}`}>
        <InputGroupInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <InputGroupAddon>{icon}</InputGroupAddon>
      </InputGroup>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
};

export default FormField;
