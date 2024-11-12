import React, { useRef } from "react";

enum Colors {
    red = "red",
    blue = "blue",
    green = "green",
    yellow = "yellow"
}

interface MultiSelectDropdownProps {
    colors?: Colors[],
    options?: string[] | null,
    onSelect?: (options: string[]) => void,
}

function MultiSelectDropdown({ colors, options, onSelect }: MultiSelectDropdownProps) {
    const optionRef = useRef<HTMLSelectElement>(null);

    const dropdownOptions = options ? options : Object.values(Colors);

    function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const values = Array.from(e.target.selectedOptions, (option) => option.value);
        console.log(values);
    }

    return (
        <>
            <select
                ref={optionRef}
                onChange={handleOnChange}
                multiple>
                {dropdownOptions.map((option, Idx) => (
                    <option value={option}>{option}</option>
                ))
                }
            </select>
        </>
    )
};

export default MultiSelectDropdown