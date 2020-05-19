import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {countries} from "../data/countries";

const ViewCountryList = props => {
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

ViewCountryList.defaultProps = {
    selected: "AFG"
};

ViewCountryList.propTypes = {
    onSelect: PropTypes.func,
    countries: PropTypes.array,
    selected: PropTypes.string
};

export {ViewCountryList}