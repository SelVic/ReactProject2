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
    )
}


export {CountryListView1}