import Select from "react-select"
import { DropdownProperties } from "@/Types/form/InputPropertiesType"

export default function DropdwonSearchField ({ data, className, ...props }: DropdownProperties) {
    const customStyle = {
        option: (defaultStyle:any, state: any) => ({
            ...defaultStyle,
            fontWeight: "500",
            padding: "7px 10px",
            backgroundColor: state.isSelected ? "rgb(186 230 253)" : "",
            '&:hover': {
                backgroundColor: "rgb(186 230 253)",
            },
           
        }),
         menu: (defaultStyle: any, state: any) => ({
            ...defaultStyle,
            borderRadius: "6px",
            zIndex: "9",
            top: "2.7rem",
            backgroundColor: state.isSelected ? "#06dde" : "#f2f2f2",
            border: "solid 1px #d0c8c8",
        }),
        control: (provided:any) => ({
            ...provided,
            width: '22rem',
            height: '2.2875rem',
            backgroundColor: '#f2f2f2',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            fontWeight: "500",
            justifyContent: 'space-between',
            border: "solid 1px #d0c4c4",
            borderRadius: '0.375rem',
            color: 'rgb(107 114 128)',
            outline: "none",
            '&:focus': {
                outline: 'none',
                boxShadow: 'none',
                borderColor: 'none',
            },
            '&:hover': {
                borderColor: 'none',
                outline: 'none',
            },
            '@media (min-width: 344px)': {
                width: '20rem',
            },
            '@media (min-width: 640px)': {
                width: '22rem',
            },
         })
    }
    return (
        <Select options={data}
            {...props}
            styles={customStyle}
        />
        )
   
}