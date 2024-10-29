import { InputFieldType } from "@/Types/form/InputPropertiesType";

export default function InputField({ value, onChange, placeholder, type, name, className, min, max, ...props }: InputFieldType) {
    return (
        <input type={type || "text"} placeholder={placeholder || ""} value={value} name={name} min={min} max={max} onChange={onChange} {...props} className={className} />
    )
}