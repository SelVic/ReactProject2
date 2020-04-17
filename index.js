import React, {Fragment, Component} from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import {Cycle1} from "./timer.js";
import {Extract} from "./extract.js";
import {Maps} from "./map";
//удалить с гитхаба папки, не удаляя их с локального диска
//{...props} почитать про spread на learnjs

/*<Link to="/">Home</Link>{" "}
<Link to="/page1">Счетчик</Link>{" "}
<Link to="/page2">Пользователи</Link>
*/
/*const App = () => (
    <Fragment>
    <div className="header">
        <div className="container">
            <div className="header-item brand">JSREACT2</div>
            <a className="header-item" ><Link to="/">Home</Link>{" "}</a>
            <a className="header-item" ><Link to="/page1">Счетчик</Link>{" "}</a>
            <a className="header-item" ><Link to="/page2">Пользователи</Link></a>
        </div>
        <Router>
            <Home path="/" />
            <Page11 path="/page1" />
            <Page2 path="/page2" />
        </Router>
    </div>
    </Fragment>
);*/

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="container">
                        <div className="header-item brand">JSREACT2</div>
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

/*const img1 = new Image();
img1.src="/images/Pic1.jpg";*/

function Home(){
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Апельсины с молоком</h1>
                <p className="myFont1">Отличный старт дня!</p>
                <span><img src="images/Pic2.jpg"/></span>
            </div>
        </div>
    );
}


const Page11 = () => (
    <div>
        <h2>Счетчик</h2>
        <Cycle1/>
    </div>
);

const Page2 = () => (
    <div>
        <h2>Пользователи</h2>
        <Extract/>
    </div>
);

// function Page3 () {
//     return (
//         <div className="container">
//             <div className="jumbotron">
//                 <h1>Карта</h1>
//                 <p className="myFont1">Справочник по географии</p>
//                 {/*<div id="map"></div>*/}
//                 {/*<a><renderMap/></a>*/}
//             </div>
//             <Maps/>
//         </div>
//     )
// }
const Page3 = () => (
    <div>
        <div>Карта2</div>
        <Maps/>
    </div>
)

render(<App/>, document.querySelector("#root"));
