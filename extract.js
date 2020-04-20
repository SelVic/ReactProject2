import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";
import {User} from "./User.jsx";


// let userId = users.id;
class Extract extends Component {
    //model
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


    // imagebox = (url)=>{
    //     return(
    //         <div>
    //             <img width={60} height={60} src={url} />
    //         </div>
    //     )
    // };
//controller
    changeHandler = (event) =>  {
        event.currentTarget.value ;
        this.setState({text: event.currentTarget.value});
    };
//view
    render() {
        let text1 = this.state.text;
        return (
            <div className="container">
                <input type="text" value = {text1} onChange={this.changeHandler} />
                <div className='users'>
                    {
                        // users.map((user , i) => <div className='user-item' key={i}>{user.login} {user.id} {this.imagebox(user.avatar_url)}</div>)
                        users.map((user, i) => <User key={user.id} user={user}/>)
                    }
                </div>
            </div>
        )
    }
}

export {Extract};


