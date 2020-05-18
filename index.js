import React, {Fragment, Component} from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import {Cycle1} from "./scripts/timer.js";
import {Extract} from "./scripts/extract.js";
import {MapPage} from "./pages/MapPage.jsx";
import {CountryView} from "./components/CountryView";


class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="gradient-element"></div>
                <div className="header">
                    <div className="container">
                        <div className="header-item brand">JSREACT2 :   </div>
                        <NavLink className="header-item" to="/">Home</NavLink>{" "}
                        <NavLink className="header-item" to="/page1">Счетчик</NavLink>{" "}
                        <NavLink className="header-item" to="/page2">Пользователи</NavLink>{" "}
                        <NavLink className="header-item" to="/page3">Карта</NavLink>{" "}
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="myFont2">Контент</div>
                        <Router primary={false}>
                            <Home path="/" />
                            <Page11 path="/page1" />
                            <Page2 path="/page2" />
                            <Page3 path="/page3" />
                        </Router>
                        </div>
                </div>
                <div className="footer">
                    <div className="container">
                    </div>
                </div>
            </Fragment>
        )
    }
}

const NavLink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
                style: {
                    color: isCurrent ? "white" : "black",
                    background: isCurrent ? "#C2554F" : ""
                }
            };
        }}
    />
);


function Home(){
    return (
        <div className="jumboHome flex-row-center">
            <div className="jumbo-Container">
                <h1 className="jumbo-title">Home page</h1>
            </div>
        </div>
    )
}


function Page11(){
    return (
        <div className="time-backgr flex-row-center">
            <div className="jumbo-Container">
                <h1 className="timer-Title">Счетчик</h1>
                <p className="timer-text"><Cycle1/></p>
            </div>
        </div>
    )
}
const Page2 = () => (
    <div>
        <div className="myFont2">Пользователи</div>
        <Extract/>
    </div>
);


const Page3 = () => (
    <div>
        <MapPage/>
    </div>
)

render(<App/>, document.querySelector("#root"));
