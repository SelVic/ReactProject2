import React, {Component, Fragment} from "react";
import {render} from 'react-dom';
import users from "./users.js";

const u = users;


class MyElement extends Component {

    render(){
        const {url}= this.props
        return(
            <div>
                <div>123</div>
                <img src={url}></img>
            </div>
        )
    }

}

class Extract extends Component {

    componentDidMount() {
        console.log(users)
    }



    foo = (url)=>{
        const a = 'blablbabl'
        return(
            <div>
                {a}
                <img width={45} height={45} src={url} />
            </div>
        )
    }

    render() {
        //const u = this.props;
        return (
            <Fragment>
                <div>
                    testFragment
                </div>

                {
                    this.foo('https://vscode.ru/wp-content/uploads/2017/11/hello-world.jpg')
                }



                <MyElement url={'https://vscode.ru/wp-content/uploads/2017/11/hello-world.jpg'}/>
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
export {Extract}


/*render(
    <Extract users={users}/>,
    document.querySelector('#users')
);*/

// export {Test}