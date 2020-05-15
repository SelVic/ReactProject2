import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../data/countries";


const CountryListView1 = (props) => {
    return (
        <div className="countries">
            {
                countries.map(c =>  <div key={c.code}>{c.name}</div>)
            }
        </div>
    //     <div className="countries">
    //     {
    //         props.countries.map(c => (
    //             <div key={c.code} className={css} onClick={e => props.onSelect(c)}>
    //                 <span className="country">{c.name}</span> <span className="capital">{c.capital.name}</span>
    //             </div>
    //         ))
    //     }
    // </div>
        //
        //
    )
}


export {CountryListView1}