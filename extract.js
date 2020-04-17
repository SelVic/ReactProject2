import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";

//
// class MyElement extends Component {
//
//     render(){
//         const {url}= this.props
//         return(
//             <div>
//                 <img src={url}></img>
//             </div>
//         )
//     }
//
// }

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
                <div className='users-list'>
                    {
                        users.map((user , i) => <div className='user-item' key={i}>{user.login} {user.id} {this.imagebox(user.avatar_url)}</div>)
                    }
                </div>
        )
    }
}

export {Extract}


