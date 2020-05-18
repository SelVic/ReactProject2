import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../data/countries";


// const CountryListView1 = (props) => {
//     return (
//         <div className="countries">
//             {
//                 countries.map(c =>  <div key={c.code}>{c.name}</div>)
//             }
//         </div>
//     )
// }

const CountryListView1 = props => {
    return (
        <div className="countries">
            {
                props.countries.map(c => (
                    <div key={c.code} onClick={e => props.onSelect(c)}>
                        <span className="country">{c.name}</span>
                    </div>
                ))
            }
        </div>
    )
};

CountryListView1.defaultProps = {
    selected: "AFG"
};

CountryListView1.propTypes = {
    onSelect: PropTypes.func,
    countries: PropTypes.array,
    selected: PropTypes.string
};

export {CountryListView1}