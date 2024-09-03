import { InputProperties } from "@/Types/form/InputPropertiesType";

export default function InputField({ value, onChange, placeholder, type, name, className, min, max, ...props }: InputProperties) {
    return (
        <input type={type || "text"} placeholder={placeholder || ""} value={value} name={name} min={min} max={max} onChange={(e) => onChange(e.target.value)} {...props} className={className} />
    )
}