import React from "react";
import Select from "react-select";


const options = [
    {value: "villa", label:"villa"},
    {value: "room", label:"room"},
    {value: "appartment", label:"appartment"},
    {value: "house", label: "house"},
];

function Searchbar(){

    const style = {
        fontSize: 14,
        color: "blue",
    };
    return(
        <div className="searchbar-container">
            <div className="search-title">
                <h1>Search Properties to Rent</h1>
            </div>
            <div className="searchbar-filter">
                <Select 
                    options={options}
                    placeholder = {"Search"}
                    style={style.Select}                
                />
            </div>
        </div>
    )
}

export default Searchbar;