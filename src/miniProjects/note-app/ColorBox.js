import React, { Component } from 'react'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
    }

    clickHandler(code) {
        this.props.onBtnClick(code)
    }

    render() {
        return (
            <div className='color-box' style={{backgroundColor: this.props.boxColor}} onClick={() => this.clickHandler(this.props.boxColor)}>
                
            </div>
        )
    }
}
