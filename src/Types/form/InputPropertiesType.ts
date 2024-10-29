export interface InputFieldType {
    value?: any, 
    checked?:any,
    onChange?: any, 
    placeholder?: string, 
    type?: string, 
    name?: any,
    id?: string,
    className?: string,
    min?: string,
    max?:string
}

// export interface DropdownFieldType extends InputFieldType {
//     data?: any,
//     dataLabel?: string
//      className?: string
// }

export interface DropdownProperties {
    data: any[]; // Array of options for the dropdown
    name: string; // Name of the field, important for Formik
    onChange: (event: { target: { name: string; value: any } }) => void; // Formik's handleChange expects this signature
    value: any; // Current value of the field
    className?: string; // Tailwind classes for styling
    dropdownClass?: string; // Additional styling for dropdown
    listClass?: string; // Additional styling for list
    dataLabel?: string;
  }
  