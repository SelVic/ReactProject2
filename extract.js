import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import {users} from "users.js";

let u = [users];

class Extract extends Component {
    render() {
        let u=this.props;
        return (
            <Fragment>
            <ul>
                {
                    u.map((l , i) => <li key={i}>{l.login} {l.id} {l.avatar_url}</li>)
                }
            </ul>
        </Fragment>
        )
    }
}
const Test = () => (
    <div>Hello</div>
);
//export {Extract}


/*render(
    <Extract users={users}/>,
    document.querySelector('#users')
);*/

export {Test}