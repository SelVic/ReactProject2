import React, {useState, useEffect, Component, Fragment} from 'react';

//синхронный асинхронный
/*const Cycle = () => {
    let [seconds, setSeconds] = useState(0);
    let x = 5;
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function reset() {
        setSeconds(0);
    }

    if (seconds < x) {
        return (
            <div>{seconds}</div>
        )
    } else
        return (
            <Fragment>
                <button onClick={reset}>Reset</button>
                <div> {seconds}.Счетчик больше Х</div>
            </Fragment>
        )
};
*/
class Cycle1 extends Component {
    interval = null;
    x = 5;
    state = {seconds: 0};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 1000);
    }
/*
    componentWillUnmount() {
        clearInterval(this.interval);
    }
*/
    reset = () => {
        this.setState({seconds: 0});
    };

    render() {
        let {seconds} = this.state;
        // let seconds = this.state.seconds;
        // let x = true; y=null;
        // (x==true) ? y=1 : y=0;
        // y = x && 2 ;
        // y = true && true && false && true ;
        // y = true || true || false || true ;
        return (
            <Fragment>
                <div> {this.state.seconds}.</div>
                {seconds > this.x && <div>Счетчик больше Х</div>}
                <button onClick={this.reset}>Reset</button>
            </Fragment>
        )
    }
}

export {Cycle1};