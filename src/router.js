import React, { Component } from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin'
import Login from './page/login';
import Buttons from './page/ui/buttons';
import NoMatch from './page/nomatch/index';
import Modals from './page/ui/modals';
import Loadings from './page/ui/loadings';
import Notification from './page/ui/notification';
import Messages from './page/ui/message';
export default class Routers extends Component {
    render() {
        return (
            <Router>
                {/* 默认打开div,或者主页面 */}
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/' render={() => {
                            return (
                                <Admin>
                                    <Switch>
                                        <Route path='/ui/buttons' component={Buttons} />
                                        <Route path='/ui/modals' component={Modals}/>
                                        <Route path='/ui/loadings' component={Loadings}/>
                                        <Route path='/ui/notification' component={Notification}/>
                                        <Route path='/ui/messages' component={Messages}/>
                                        
                                        <Route component={NoMatch} />
                                    </Switch>
                                </Admin>
                            )
                        }} />
                        <Route path='/order/detail' component={Login} />


                    </Switch>
                </App>
            </Router>
        )
    }
}
