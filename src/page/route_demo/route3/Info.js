import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                Info2
                动态路由的参数值是:{this.props.match.params.mainId}
            </div>
        )
    }
}
