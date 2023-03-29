import React, { Component } from 'react';
import Child from './Child';

export default class Exercise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [
                {Name: 'Ronaldo', age: 37, team: 'ManUnited'},
                {Name: 'Benzema', age: 34, team: 'RealMadrid'},
                {Name: 'Messi', age: 35, team: 'PSG'},
                {Name: 'Haaland', age: 21, team: 'Man City'},
                {Name: 'Salah', age: 29, team: 'Liverpool'}
            ]
        }

        this.removeHandler = this.removeHandler.bind(this)
    }

    removeHandler(name) {
        let playersList = [...this.state.players]
        let selectedPlayerIndex = playersList.findIndex(player => {
            return name === player.Name
        })

        playersList.splice(selectedPlayerIndex, 1)

        this.setState({ players: playersList })
    }

    render() {
        return (
            <section id='exercise'>
                {this.state.players.map(player => (
                    <Child key={player.Name} {...player} removeFunc={this.removeHandler}></Child>
                ))}
            </section>
        )
    }
}