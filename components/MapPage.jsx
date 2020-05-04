import React, {Component} from "react";
import {countries} from "../data/countries";
// import first from 'lodash/first';

//вторая через хуки
//не мешать пропсы со стейтами
//componentdidupdate
//Math
//в момент старта карты стартануть с правильным значением
class MapPage extends Component {
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
            <div className="view">
                <div className="view-data">
                    <div className="view-data-grid">
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Код страны</div>
                                <div className="view-data-value">1</div>
                            </div>
                            <i className="view-data-icon fa fa-book"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Основной домен</div>
                                <div className="view-data-value">2</div>
                            </div>
                            <i className="view-data-icon fa fa-at"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Население</div>
                                <div className="view-data-value">3</div>
                            </div>
                            <i className="view-data-icon fa fa-address-card"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Территория</div>
                                <div className="view-data-value">4</div>
                            </div>
                            <i className="view-data-icon fa fa-globe"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Язык</div>
                                <div className="view-data-value">5</div>
                            </div>
                            <i className="view-data-icon fa fa-comments"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Валюта</div>
                                <div className="view-data-value">6</div>
                            </div>
                            <i className="view-data-icon fa fa-balance-scale"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Телефонный код</div>
                                <div className="view-data-value">7</div>
                            </div>
                            <i className="view-data-icon fa fa-fax"/>
                        </div>
                        <div>
                            <div className="view-data-block">
                                <div className="view-data-title">Регион</div>
                                <div className="view-data-value">8</div>
                            </div>
                            <i className="view-data-icon fa fa-university"/></div>
                    </div>
                    <div className="view-data-flag">
                        <img src = "https://restcountries.eu/data/yem.svg"/>
                    </div>
                </div>
                <div>
                    <div className="mapSize" id="map"></div>
                </div>
            </div>
        )
    }
}
export {MapPage}