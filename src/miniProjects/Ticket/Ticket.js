import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                US: ["Los Angles", "Chicago", "New York", "Texas", "Washingthon DC"],
                Italy: ['Milan', 'Roma', 'Napoli', 'genova', 'venezia'],
            },
            mainCity: '',
            mainCountryCities: [],
            userName: ''
        }

    }

    countrySelectHandling(event) {
        let mainCountry = event.target.value
        if (mainCountry == -1) {
            this.setState({
                mainCountryCities: []
            })
        } else {
            this.setState({
                mainCountryCities: this.state.countriesData[mainCountry]
            })
        }
    }

    citySelectChange(event) {
        this.setState({
            mainCity: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()
        alert('Hey ' + this.state.userName + '👋' + "\n" + ' your selected city is : ' + this.state.mainCity)
    }

    nameHandler(event) {
        this.setState({
            userName: event.target.value
        })
    }


    render() {

        let cities_list = (this.state.mainCountry === '-1') ? null :
            this.state.mainCountryCities.map(city => (
                <option key={city}>{city}</option>
            ))

        return (
            <section className="ticket-container">
                <div className="container">
                    <div className="col-md-6 box">
                        <input className="fnameInput" placeholder="First Name" value={this.state.userName} onChange={(event) => this.nameHandler(event)} />
                    </div>

                    <div className="col-md-6 box">
                        <input className="lnameInput" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6 box">
                        <input className="phoneInput" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-6 box">
                        <input className="emailInput" placeholder="Email" />
                    </div>
                    <div className="col-md-6 box">
                        <select className="countrySelect" onChange={(event) => this.countrySelectHandling(event)} value={this.state.mainCountry}>
                            <option value="-1">Please Select ...</option>
                            <option className="option" value="Iran">Iran</option>
                            <option className="option" value="Italy">Italy</option>
                            <option className="option" value="US">United State</option>
                        </select>
                    </div>
                    <div className="col-md-6 box">
                        <select className="citySelect" onChange={(event) => this.citySelectChange(event)} value={this.state.mainCity}>
                            {this.state.mainCountryCities.length || <option value="-1">Please Select City</option>}
                            {cities_list}
                        </select>
                    </div>
                    <div className="col-md-12 box">
                        <button className="btn" onClick={(event) => this.submitHandler(event)}>Book a ticket</button>
                    </div>
                </div>
            </section>
        )
    }
}
