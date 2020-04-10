import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "users.js";

const u = users;

class Extract extends Component {
    render() {
        let {users} = this.props;
        return <Fragment>
            <ul>
                {
                    users.map((item, i) => <li key={i}>{item.login} {item.id} {item.avatar_url}</li>)
                }
            </ul>
        </Fragment>;
    }
}


//export {Extract}


render(
    <Extract users={users}/>,
    document.querySelector('#users')
);