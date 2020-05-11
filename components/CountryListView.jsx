import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../data/countries";
import {Country} from "./Country";

// const CountryListView = props => {
//     return (
//         <div className="countries">{
//             props.countries.map(c => {
//                 c=c||{};
//                 return (
//                     <div key={c.code} className={`countries-item ${props.selected == c.code ? 'active' : ''}`} onClick={e => props.onSelect(c)}>
//                         <span className="country">{c.name || "Названия нет"}</span> <span className="capital">{c.capital && c.capital.name}</span>
//                     </div>
//                 )})
//         }</div>
//     )
// }

const CountryListView1 = () => {
    let c=countries;
    return (
    <div>kek</div>
    )

}
// CountryListView1.propTypes = {
//     onSelect: PropTypes.func
// };

export {CountryListView1}