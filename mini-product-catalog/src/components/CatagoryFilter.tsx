import React, {useRef}  from 'react';


export enum Categories {
  books = "books",
  electronics = "electronics",
}

export interface CatagoryFilterProps {
  categories?: Categories[]
}

function CatagoryFilter() {

  const catSelect = useRef<HTMLSelectElement>(null);

  const categories: string[] = [
    "books",
    "electronics"
  ]

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log(selectedValues); // Logs all selected options as an array
  };

  return (
    <>
      <h3> Catagory Filter</h3>
      <select name="filters" id="filters" ref={catSelect} onChange={handleSelectionChange} multiple>
        {categories.map((cata, idx) => (
          <option key={idx}  value={cata}>{cata}</option>
        ))}
      </select>
    </>
  )
}

export default CatagoryFilter
