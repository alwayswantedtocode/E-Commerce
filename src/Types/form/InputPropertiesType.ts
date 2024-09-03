export interface InputProperties{
    value?: any, 
    checked?:boolean,
    onChange?: any, 
    placeholder?: string, 
    type?: string, 
    name?: string,
    id?: string,
    className?: string,
    min?: string,
    max?:string
}

export interface DropdownProperties extends InputProperties{
    data?: any,
    dataLabel?: string
    className?: string
}