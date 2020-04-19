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

let userId = users.id;
class Extract extends Component {
    state = {
    text: ""
    };
    componentDidMount() {
    };

    // updateText = (text) => {
    //     let searchLogin = text.trim().toLowerCase();
    //     if (searchLogin)
    //         this.setState({
    //             text: searchLogin,
    //             filtered: users.filter(user => user.login.includes(searchLogin))
    //         })
    // }


    imagebox = (url)=>{
        return(
            <div>
                <img width={60} height={60} src={url} />
            </div>
        )
    };



    render() {
        let text = this.state;
        return (
            <div className="container">
                <div><input className="form-size" type="text" value={text} onChange={}/></div>
                <div className='users-list'>
                    {
                        users.map((user , i) => <div className='user-item' key={i}>{user.login} {user.id} {this.imagebox(user.avatar_url)}</div>)
                    }
                </div>
            </div>
        )
    }
}

export {Extract};


