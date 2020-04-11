import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";


class MyElement extends Component {

    render(){
        const {url}= this.props
        return(
            <div>
                <img src={url}></img>
            </div>
        )
    }

}

class Extract extends Component {

    componentDidMount() {
    }

    imagebox = (url)=>{
        return(
            <div>
                <img width={60} height={60} src={url} />
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                <ul>
                    {
                        users.map((user , i) => <li key={i}>{user.login} {user.id} {this.imagebox(user.avatar_url)}</li>)
                    }
                </ul>
            </Fragment>
        )
    }
}

export {Extract}


