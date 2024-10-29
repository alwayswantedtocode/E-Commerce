import {FormFieldProperties} from "@/Types/form/FormFieldPropertiesType";
import InputTypesUnified from "./InputTypesUnified";

export default function CustomFormField({ label,
    required,
    type,
    placeholder,
    onChange,
    value,
    checked,
    id,
    name,
    max,
    min,
    className, ...props }: FormFieldProperties) {

    return (
        <>
            {type ? <div>{label && <label className="block text-sm mb-2 font-medium" htmlFor={id}>
                {label}{required ? <span className="text-[red]"> &#42;</span> : null}
            </label>}
                <InputTypesUnified type={type ||""} props={{ ...props, placeholder, value, checked, onChange, id, className, max, min }} className={`${className}`} />
            </div> : null}
        </>
    )
}