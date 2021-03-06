import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../data/countries";

const ViewCountryList = props => {
    return (
        <div className="countries">
            {
                props.countries.map(c => {
                    c=c||{};
                    return(
                    <div key={c.code}
                         onClick={e => props.onSelect(c)} className="countries-item"> <span>{c.name}</span> </div>
                )
                })
            }
        </div>
    )
};

ViewCountryList.defaultProps = {
    selected: "AFG"
};

ViewCountryList.propTypes = {
    onSelect: PropTypes.func,
    countries: PropTypes.array,
    selected: PropTypes.string
};

export {ViewCountryList}