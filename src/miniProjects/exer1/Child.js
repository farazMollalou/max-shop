import React, { Component } from 'react';
import { BiFootball } from 'react-icons/bi';
import { IconContext } from "react-icons";
import './Child.css'




export default class Child extends Component {
    constructor(props) {
        super(props)
    }

    clickHandler(name) {
        this.props.removeFunc(name)
    }

    render() {
        return (
            <div className='playerCard'>
                <h1>{this.props.Name}
                    {/* <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: 'gold', fontSize: '24px' } }}> */}
                        <BiFootball style={{ verticalAlign: 'middle', color: 'yellow', fontSize: 40 }}/>
                    {/* </IconContext.Provider> */}
                </h1>
                <h2>{this.props.team}</h2>
                <h3>Age is : {this.props.age}</h3>
                <button onClick={() => this.clickHandler(this.props.Name)}>Delete</button>
            </div>
        )
    }
}
