import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class X extends Component {
    render() {
        return (
            <div>
                X系列
                <br />
                <Link to="/X/NEXY1">NEXY1</Link>
                <br />
                <Link to="/X/NEXY2">/X/NEXY2</Link>
                {this.props.children}
            </div>
        )
    }
}
