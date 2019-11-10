import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div>
               上级所传来的参数:{this.props.match.params.NEXID}
            </div>
        )
    }
}
