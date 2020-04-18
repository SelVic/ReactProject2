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
let text = null;
let userId = users.id;
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
text = this.props;
    render() {
        return (
                <div> <input className = "containerSize" type="text" value = {text}/> <div>
                <div className='users-list'>
                    {
                        users.map((user , i) => <div className='user-item' key={i}>{user.login} {user.id} {this.imagebox(user.avatar_url)}</div>)
                    }
                </div>
        )
    }
}

export {Extract}


