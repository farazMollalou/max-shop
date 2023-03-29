import React, { Component } from 'react'

export default class Note extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('نوه')
    }

    clickHandler(id) {
        this.props.onRemoveHandler(id)
    }

    render() {
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: this.props.bgColor }} onClick={() => this.clickHandler(this.props.id)}><p className="card-text p-3">{this.props.title}</p></div>
        )
    }
}
