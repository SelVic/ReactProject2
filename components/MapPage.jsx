import React, {Component} from "react";

class Page extends Component {
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
            viewData: {
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
        const {viewData, mapData, selected} = this.state;
        return (
            <div className="container ">
                <div className="jumbo">
                    <h1>Справочник по географии</h1>
                    <p>Полезная информация о странах</p>
                </div>
                <div className="view">
                    <ViewData {...viewData}/>
                    <ViewList countries={countries} selected={selected} onSelect={this.onSelect}/>
                    <ViewMap {...mapData} />
                </div>
            </div>
        )
    }
}

// class MapsPage extends Component {
//     componentDidMount() {
//         let foo = () => {
//             this.myMap = new ymaps.Map("map", {center: [55.76, 37.64], zoom: 7})
//         };
//         window.ymaps.ready(foo);
//     }
//     componentWillUnmount() {
//         this.myMap.destroy();
//     }
//
//     myMap = null;
//
//     render() {
//         return (
//             <div className="mapSize" id="map"></div>
//         )
//     }
// }
export {MapsPage}