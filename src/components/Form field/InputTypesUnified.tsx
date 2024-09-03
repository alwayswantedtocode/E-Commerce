import FormTypes from "@/Types/form/FormTypes";
import InputField from "@/components/Form field/InputField";
import RadioField from "@/components/Form field/RadioField";
import DropdwonSearchField from "@/components/Form field/DropdownSearchField";

export default function InputTypesUnified({type, className,props }:{type:string,className:string, props:any}) {
    switch (type) {
        case FormTypes.TEXT:
        case FormTypes.EMAIL:
        case FormTypes.NUMBER:
        case FormTypes.PASSWORD:
        case FormTypes.DATE:
            return <InputField {...{ ...props, type, className }} />
        case FormTypes.CHECKBOX:
            return <RadioField {...{ ...props, type, className }} />
        case FormTypes.DROPDOWN_SEARCH:
            return <DropdwonSearchField {...{ ...props, type, className }} />
        default:
            return null;
    }
}