import React, { useState, useRef, useEffect } from 'react';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface InputSelectorProps {
  Data: any[];
  onChange: (event: { target: { name: string; value: any } }) => void;
  label?: any;
  value: any;
  name: string; // Ensure that we capture the name of the field for form handlers like Formik
  inputClass?: string; // Tailwind classes for the input div
  dropdownClass?: string; // Tailwind classes for the dropdown list
  listClass?: string; // Tailwind classes for the dropdown list
}

const InputSelector: React.FC<InputSelectorProps> = (props: InputSelectorProps) => {
  const clickOutRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);

  const ulStyle = `absolute top-[2.2rem] m-auto border-[1px] rounded-[6px] border-[#d0c8c8] bg-[#f2f2f2] py-[3px] shadow-md ${props.dropdownClass}`;

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (option: { label: string; value: any }, index: number) => () => {
    setActive(index)
    // Mimic an event object structure to pass to onChange
    const event = {
      target: {
        name: props.name, // Pass the name of the input field
        value: option, // Pass the selected value
      },
    };

    props.onChange(event); // Pass the event-like object to onChange
    setIsOpen(false);
  };

  const handleClickOut = (e: MouseEvent): void => {
    if (!clickOutRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  const getValue = () => {
    return props.value ? props.value.label : "select...";
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative" ref={clickOutRef}>
      <div
        className={`border-[1px] font-medium rounded-[6px] border-[#d0c4c4] text-black px-[0.6rem] ${props.inputClass}`}
        onClick={handleDropdown}
      >
        <div className="flex items-center border-1 w-[70%] h-[100%]">
          {getValue()}
        </div>
        <div className="flex items-center h-[2.2875rem] border-l-1 font-medium text-xl">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      {isOpen && (
        <ul className={ulStyle}>
          {props.Data.map((option, index: number) => (
            <li
              className={`pointer px-[10px] font-medium hover:bg-red-400  py-2 ${active === index ? "bg-red-400 " : "bg-[#f2f2f2]"
                } ${props.listClass}`}
              key={index}
              onClick={onOptionClicked(option, index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelector;
