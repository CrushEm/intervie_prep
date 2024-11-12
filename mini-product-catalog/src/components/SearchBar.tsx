import React from "react";

interface SearchProps {
    updateSearch: (input: string) => void,
}

function SearchBar({updateSearch}:SearchProps ){
    return (
        <>
        <h3> Search Bar</h3>
        <input type="text" onChange={(e)=>{ updateSearch(e.target.value)}}></input>
        </>
    )
}

export default SearchBar