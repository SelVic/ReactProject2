import React, {Fragment, Component} from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import {Cycle1} from "./timer.js";
import {Extract} from "./extract.js";
import {Maps} from "./map";

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="container">
                        <div className="header-item brand">JSREACT2 :   </div>
                        <Link className="header-item" to="/">Home</Link>{" "}
                        <Link className="header-item" to="/page1">Счетчик</Link>{" "}
                        <Link className="header-item" to="/page2">Пользователи</Link>{" "}
                        <Link className="header-item" to="/page3">Карта</Link>{" "}
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <h1>Контент</h1>
                        <Router>
                            <Home path="/" />
                            <Page11 path="/page1" />
                            <Page2 path="/page2" />
                            <Page3 path="/page3" />
                        </Router>
                        </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div>ФУТЕР</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function Home(){
    return (
        <div className="jumbo flex-row-center">
            <div className="jumbo-Container">
                <h1 className="jumbo-title">Home page</h1>
                <p className="jumbo-text">Баловство с CSS</p>
            </div>
        </div>
    )
}

//
// const Page11 = () => (
//     <div className='time-backgr'>
//         Счетчик
//         <Cycle1/>
//     </div>
// );
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
        <h2>Пользователи</h2>
        <Extract/>
        {/*<UsersPageAlt/>*/}
    </div>
);


const Page3 = () => (
    <div>
        <div>Карта</div>
        <Maps/>
    </div>
)

render(<App/>, document.querySelector("#root"));
