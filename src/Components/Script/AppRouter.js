import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>

const Login = Loadable({
    loader: () => import('../Script/LoginForm.js'),
    loading: Loading,
});

const Home = Loadable ({
    loader: () => import('../Script/Home.js'),
    loading: Loading,
})

const Account = Loadable ({
    loader: () => import('../Script/Account'),
    loading: Loading,
}) 

class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route key={1} exact path="/" component={Home} />
                    <Route key={2} path="/login" component={Login} />
                    <Route key={3} path="/account" component={Account} />
                </Switch>
            </Router>
        )
    }
}
export default AppRouter;