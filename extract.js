import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";
import {User} from "./User.jsx";


class Extract extends Component {
    state = {
        text: "",
        filtered : users
    };
    componentDidMount() {
    };

    changeHandler = (event) =>  {
        event.currentTarget.value ;
        this.setState({text: event.currentTarget.value});
        let searchId = event.currentTarget.value;
        if (searchId)
            this.setState({
                text: searchId,
                filtered: users.filter(user => user.login.includes(searchId))
            })
    };
//view
    render() {
        let text1 = this.state.text;
        let filtered = this.state.filtered;
        return (
            <div className="container">
                <input className="input-style" type="text" value = {text1} onChange={this.changeHandler} />
                <div className='users'>
                    {
                        filtered.map((user, i) => <User key={user.id} user={user}/>)
                    }
                </div>
            </div>
        )
    }
}

export {Extract};


