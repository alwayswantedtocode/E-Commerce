import { DropdownProperties } from "@/Types/form/InputPropertiesType";
import InputSelector from "../Resuable SelectInputs/InputSelector";

export default function DropdownField({ value, onChange, data, dataLabel, className, name, ...props }: DropdownProperties) {
    return (
        <InputSelector name={name} Data={data} label={dataLabel} value={value} onChange={onChange} {...props}
            inputClass={`w-full h-[2rem] bg-[#ffff] p-[0.4rem] flex items-center justify-between border-2 focus:outline-none border-red-400 text-gray-400 ${className}`}
            dropdownClass= {`bg-[#ffff] w-full overflow-auto z-[99]  ${className}`} listClass="py-2 bg-white" />
    )
}