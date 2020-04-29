import React, {Component} from "react";


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
