import React from "react";
import {PropTypes} from "prop-types";


const ViewCountryData = (props) => (
    <div className="view">
        <div className="view-data">
            <div className="view-data-grid">
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Код страны</div>
                        <div className="view-data-value">{props.code}</div>
                    </div>
                    <i className="view-data-icon fa fa-book"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Основной домен</div>
                        <div className="view-data-value">{props.domains}</div>
                    </div>
                    <i className="view-data-icon fa fa-at"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Население</div>
                        <div className="view-data-value">{props.population}</div>
                    </div>
                    <i className="view-data-icon fa fa-address-card"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Территория</div>
                        <div className="view-data-value">{props.area}</div>
                    </div>
                    <i className="view-data-icon fa fa-globe"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Язык</div>
                        <div className="view-data-value">{props.languages}</div>
                    </div>
                    <i className="view-data-icon fa fa-comments"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Валюта</div>
                        <div className="view-data-value">{props.currencies.map(c => <span key={c.code}>{c.code} {c.name} {c.symbol}</span>)}</div>
                    </div>
                    <i className="view-data-icon fa fa-balance-scale"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Телефонный код</div>
                        <div className="view-data-value">{props.phones}</div>
                    </div>
                    <i className="view-data-icon fa fa-fax"/>
                </div>
                <div>
                    <div className="view-data-block">
                        <div className="view-data-title">Регион</div>
                        <div className="view-data-value">{props.subregion}</div>
                    </div>
                    <i className="view-data-icon fa fa-university"/></div>
            </div>
            <div className="view-data-flag">
                <img src = {props.flag}/>
            </div>
        </div>
    </div>
);

ViewCountryData.propTypes = {
    code: PropTypes.string,
    domains: PropTypes.array,
    population: PropTypes.number,
    area: PropTypes.number,
    languages: PropTypes.string,
    currencies: PropTypes.array,
    phones: PropTypes.array,
    subregion: PropTypes.string,
    flag: PropTypes.string
};

ViewCountryData.defaultProps = {
    code: "",
    domains: [],
    population: "",
    area: "",
    languages: [],
    currencies: [],
    phones: [],
    subregion: "",
    flag: ""
};

export {ViewCountryData}