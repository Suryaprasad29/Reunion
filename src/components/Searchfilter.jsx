import React from "react";
import Select from "react-select";

const Location = [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "jaipur", label: "jaipur" },
    { value: "gandinagar", label: "gandinagar" },
    { value: "Delhi", label: "Delhi" },
    { value: "mumbai", label: "mumbai" },
];

const price = [
    { value: "$200", label: "$200" },
    { value: "$400", label: "$400" },
    { value: "$800", label: "$800" },
    { value: "$1000", label: "$1000" },
    { value: "$1000", label: "$10000" },
]

const Date = [
    { value: "1 - 6", label: "1 - 6" },
    { value: "7 -13", label: "7 -13" },
    { value: "14 - 20", label: "14 - 20" },
    { value: "21 - 27", label: "21 - 27" },
    { value: "27 - 30", label: "27 - 31" },
]

const type = [
    { value: "House", label: "House" },
    { value: "villa", label: "Villa" },
    { value: "flat", label: "Flat" },
    { value: "appartment", label: "Appartment" },
    { value: "palace", label: "palace" },
]

function Searchfilter(){
    const style = {
        fontSize: 14,
        color: "blue",
    };


    return(
        <div className="filter-container">
            <div className="filter">
                <p>Location</p>
                <Select 
                    options = {Location}
                    placeholder={"Search By Place"}
                    style = {style.select}
                />
            </div>
            <div className="filter">
                <p>Price</p>
                <Select 
                    options = {price}
                    placeholder={"Search By Price"}
                    style = {style.select}
                />
            </div>
            <div className="filter">
                <p>Date</p>
                <Select 
                    options = {Date}
                    placeholder={"search by date of avalibility"}
                    style = {style.select}
                />
            </div>
            <div className="filter">
                <p>type</p>
                <Select 
                    options = {type}
                    placeholder={"Search By type of house"}
                    style = {style.select}
                />
            </div>
            <div className="button-fil">
                <button className="btn-fil">Search</button>
            </div>
        </div>
    );
}

export default Searchfilter;