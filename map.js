import React, {Component} from "react";
import {countries} from "./countries";
import render from "react-dom";

// ymaps.ready(maps);
// function maps() {
//     return (
//         <div>Test</div>
//         // let myMap = new ymaps.Map("map", {center: [55.76, 37.64], zoom: 7})
//     )
// }
// ymaps.ready(Maps);
class Maps extends Component {
    componentDidMount() {
        let foo = () => {
            this.myMap = new ymaps.Map("map", {center: [55.76, 37.64], zoom: 7})
        };
        window.ymaps.ready(foo);
    }
    componentWillUnmount() {
        this.myMap.destroy();
    }

    myMap = null;

    render() {
        return (
            <div className="mapSize" id="map"></div>
        )
    }
}
export {Maps}
// let myMap;
//
// function renderMap() {
//     myMap = new ymaps.Map('map', {center: [55.76], zoom: 10})
// }
// export {renderMap}