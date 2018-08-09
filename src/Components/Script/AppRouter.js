import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header.js';

const Loading = () => <div>Loading...</div>

const Login = Loadable({
    loader: () => import('../Script/LoginForm.js'),
    loading: Loading,
    delay: 0,
}); 

const Home = Loadable ({
    loader: () => import('../Script/Home.js'),
    loading: Loading,
    delay: 0,
})

const Account = Loadable ({
    loader: () => import('../Script/Account'),
    loading: Loading,
}) 

class AppRouter extends React.Component {
    render(){
        
        let headerEle = [];
        if(this.props.isLogged === true){
          headerEle.push(
            <Header logged={true} onClick={(e)=>{}} />
          )
        }

        return(
            <div>
            <Header logged={true} onClick={(e)=>{}} />
            <Router>
                <Switch>
                    <Route key={1} exact path="/" component={Home} />
                    <Route key={2} path="/login" component={Login} />
                    <Route key={3} path="/account" component={Account} />
                </Switch>
            </Router>
            </div>
        );
    }
}
export default AppRouter;