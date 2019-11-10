import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                这个界面是公共的?
                动态路由的参数值是:{this.props.match.params.mainId}
            </div>
        )
    }
}
