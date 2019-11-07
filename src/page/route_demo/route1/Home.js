import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import About from './About';
import Main from './Main';
export default class Home extends Component {
    render() {
        return (
            // 路由的根节点
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        
                    </ul>

                    {/* 小写的c */}
                    {/* 两种exact的写法 */}
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route exact path="/about" component={About}></Route>

                </div>
            </HashRouter>
        )
    }
}
