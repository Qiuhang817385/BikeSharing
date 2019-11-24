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
import Tab from './page/ui/tab';
import Gallery from './page/ui/gallery';
import Carousels from './page/ui/carousel';
import LoginForm from './page/form/login';
import RegisterForm from './page/form/register';
import BasicTable from './page/table/basicTable';
import HighTable from './page/table/HighTable';
import City from './page/city/index'

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
                                        <Route path='/ui/tabs' component={Tab}/>
                                        <Route path='/ui/gallery' component={Gallery}/>
                                        <Route path='/ui/carousel' component={Carousels}/>
                                        <Route path='/form/login' component={LoginForm}/>
                                        <Route path='/form/reg' component={RegisterForm}/>
                                        <Route path='/table/basic' component = {BasicTable}/>
                                        <Route path='/table/high' component = {HighTable}/>
                                        <Route path="/city" component={City} />
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
