import React, {Component} from "react";
import {render} from "react-dom";
import {countries} from "../data/countries";
import {ViewMap} from "../components/ViewMap";
import {ViewCountryData} from "../components/ViewCountryData";
import {CountryListView1} from "../components/CountryListView";
import first from 'lodash/first'


class MapPage extends Component {
    constructor(props) {
        super(props);
        let c = first(countries) || {};
        this.state = this.getStateObj(c)
    }

    getMapData = (country) => {
        let center, zoom;
        if (country.capital.latlng && country.capital.latlng.length)
            [center, zoom] = [country.capital.latlng, 11];
        else
            [center, zoom] = [country.latlng, 6];
        return [center, zoom]
    };

    onSelect = (country) => {
        let newState = this.getStateObj(country);
        this.setState(newState)
    };

    getStateObj = (country) => {
        let [center, zoom] = this.getMapData(country);
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
                center,
                zoom
            }
        }
    };

    render() {
        const {viewCountryData, mapData, selected} = this.state;
        return (
                <div className="view">
                    <ViewCountryData {...viewCountryData}/>
                    <CountryListView1 countries={countries} selected={selected} onSelect={this.onSelect}/>
                    <ViewMap {...mapData} />
                </div>
        )
    }
}

export {MapPage}