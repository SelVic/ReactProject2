import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";
import {User} from "../components/User.jsx";
import qs from "qs"

// const UsersPageAlt = props => {
//     const location = useLocation();
//     let {id} = qs.parse(location.search, {ignoreQueryPrefix: true});
//
//     let [filtered, updateFiltered] = useState(users)
//     let [text, updateText] = useState("");
//     let searchLogin = text.trim().toLowerCase();
//
//     useEffect(() => {
//         if (id) {
//             let result = users.filter(user => user.id === +id)
//             updateFiltered(result);
//         }
//     },[id])
//
//     useEffect(() => {
//         if (searchLogin) {
//             let result = users.filter(user => user.login.includes(searchLogin))
//             updateFiltered(result);
//         }
//     },[searchLogin])

class Extract extends Component {
    state = {
        text: "",
        filtered : users
    };
    componentDidMount() {
        // let path = location.search;
        //         // path=path.replace('?id=','')
        //         // if (path)
        //         //     this.setState({filtered: users.filter(user => user.id === +path)})
        let query = qs.parse(location.search, {ignoreQueryPrefix: true});
        if (query.id)
            this.setState({filtered: users.filter(user => user.id === +query.id)});
    };

    changeHandler = (event) =>  {
        event.currentTarget.value ;
        this.setState({text: event.currentTarget.value});
        let searchId = event.currentTarget.value;
        this.setState({
            text: searchId,
            filtered: searchId==""?users:users.filter(user => user.login.includes(searchId))
        })
    };
    //cond?case1:case2
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


