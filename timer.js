import React, {Component, Fragment} from 'react';

class Cycle1 extends Component {
    interval = null;
    x = 5;
    state = {seconds: 0};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 1000);
    }
    reset = () => {
        this.setState({seconds: 0});
    };

    render() {
        let {seconds} = this.state;
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