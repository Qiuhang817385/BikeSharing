import React, { Component } from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NEX from './pages/NEX系列/NEX';
import X from './pages/X系列/X'
import IQOO from './pages/iQOO专区/IQOO';
import './Home.scss';
import { Menu} from 'antd';
export default class Home extends Component {
    state = {
        current: 'mail',
    };
    render() {
        return (
            <Router>

                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="iQOO">
                            <Link to="/iQOO">iQOO专区</Link>
                         </Menu.Item>
                        <Menu.Item key="NEX">
                        <Link to="/NEX">NEX系列</Link>
                         </Menu.Item>
                        <Menu.Item key="X">
                        <Link to="/X">X系列</Link>
                         </Menu.Item>
                    </Menu>
                   
                    <Route exact path="/iQOO" component={IQOO}></Route>
                    <Route exact path="/NEX" component={NEX}></Route>
                    <Route exact path="/X" component={X}></Route>
                </div>
            </Router>
        )
    }
}
