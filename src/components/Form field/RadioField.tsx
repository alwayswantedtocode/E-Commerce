import { InputProperties } from "@/Types/form/InputPropertiesType";

export default function RadioField({ checked, onChange, placeholder, type, name, className, ...props }: InputProperties) {
    return (
        <input type={type || "text"} checked={checked} name={name} onChange={(e) => onChange(e.target.checked)} {...props} className="" />
    )
}