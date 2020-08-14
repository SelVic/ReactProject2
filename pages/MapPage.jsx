import React, {Component} from "react";
import {render} from "react-dom";
import {countries} from "../data/countries";
import {ViewMap} from "../components/ViewMap";
import {ViewCountryData} from "../components/ViewCountryData";
import {ViewCountryList} from "../components/ViewCountryList";
import first from 'lodash/first'


class MapPage extends Component {
    constructor(props) {
        super(props);
        let countr = first(countries) || {};
        this.state = this.getObjectState(countr)
    }

    onSelect = (country) => {
        let newState = this.getObjectState(country);
        this.setState(newState)
    };

    getMapState = (country) => {
        let [center, zoom] = [country.latlng, 8];
        return [center, zoom]
    };

    getObjectState = (country) => {
        let [center, zoom] = this.getMapState(country);
        return {
            selected: country.code,
            viewCountryData: {
                code: country.code,
                domains: country.topLevelDomain,
                population: country.population,
                area: country.area,
                languages: country.languages,
                currencies: country.currencies,
                phones: country.callingCodes,
                subregion: country.subregion,
                flag: country.flag,
            },
            mapData: {
                center, zoom
            }
        }
    };

    render() {
        const {viewCountryData, mapData, selected} = this.state;
        return (
                <div className="view">
                    <ViewCountryData {...viewCountryData}/>
                    <ViewCountryList countries= {countries} selected={selected} onSelect={this.onSelect}/>
                    <ViewMap {...mapData} />
                </div>
        )
    }
}

export {MapPage}