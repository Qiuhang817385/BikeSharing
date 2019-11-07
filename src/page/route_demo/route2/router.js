import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';
import A from './A';
import Main from './Main';

import Home from './Home';
export default class router extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* main只有一层路由的时候 */}
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    {/* main嵌套一个子路由 */}
                    {/* <Route exact={true} path="/" render={()=> */}
                    {/* 只有先进来,才能匹配到嵌套的子路由 */}
                    <Route path="/main" render={() => {
                        // 需要有返回值
                        return (
                            <Main>
                                <Route exact path="/main/a" component={A}></Route>
                            </Main>
                        )
                    }
                    }></Route>

                    <Route exact path="/about" component={About}></Route>
                </Home>
            </Router>
        )
    }
}
