import React, {useEffect, useState} from "react";
import {render} from 'react-dom';
import {users} from "./users.js";
import {User} from "../components/User.jsx";
import qs from "qs"
import {useLocation} from "@reach/router";

const Extract = props => {
        const location = useLocation();
        let {id} = qs.parse(location.search, {ignoreQueryPrefix: true});
        let [filtered, updateFiltered] = useState(users)
        let [text1, updateText] = useState("");
        let searchUser = text1.trim().toLowerCase();

        useEffect(() => {
            if (id) {
                let result = users.filter(user => user.id === +id)
                updateFiltered(result);
            }
        },[id, searchUser])

        useEffect(() => {
            if (searchUser) {
                let result = users.filter(user => user.login.includes(searchUser))
                updateFiltered(result);
            }
        },[searchUser]) 
        return (
        <div className="container">
            <input className="input-style" type="text" value = {text1} onChange={e => updateText(e.currentTarget.value)} />
            <div className='users'>
                {
                    filtered.map((user, i) => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    )
}
export {Extract}

// class Extract extends Component {
//     state = {
//         text: "",
//         filtered : users
//     };
//     componentDidMount() {
//         let query = qs.parse(location.search, {ignoreQueryPrefix: true});
//         if (query.id)
//             this.setState({filtered: users.filter(user => user.id === +query.id)});
//     };
//
//     changeHandler = (event) =>  {
//         event.currentTarget.value ;
//         this.setState({text: event.currentTarget.value});
//         let searchId = event.currentTarget.value;
//         this.setState({
//             text: searchId,
//             filtered: searchId==""?users:users.filter(user => user.login.includes(searchId))
//         })
//     };
//     //cond?case1:case2
// //view
//     render() {
//         let text1 = this.state.text;
//         let filtered = this.state.filtered;
//         return (
//             <div className="container">
//                 {/*<input className="input-style" type="text" value = {text1} onChange={this.changeHandler} />*/}
//                 <div className='users'>
//                     {
//                         filtered.map((user, i) => <User key={user.id} user={user}/>)
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
//
// export {Extract};


