import React, { Component } from "react";
import "./App.css";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log("props", props);

    }

    calculateTheDifference(deadlineDate) {
        let now = Date.now();
        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;
        let difference = Date.parse(deadlineDate) - now;
        let days = Math.floor(difference / _day);
        let hours = Math.floor((difference % _day) / _hour);
        let minutes = Math.floor((difference % _hour) / _minute);
        let seconds = Math.floor((difference % _minute) / _second);
        this.setState({
            days: days,
            minutes: minutes,
            hours: hours,
            seconds: seconds
        });
    }

    leadingZero(number) {
        return number < 10 && number > -1 ? "0" + number : number; 
    }

    componentWillMount() {
        this.calculateTheDifference(this.props.deadline);

    }
    componentDidMount() {
        setInterval(() => this.calculateTheDifference(this.props.deadline), 1); 
    }

    render() {
        return (
            <div>
                <div className="App-Days">{this.leadingZero(this.state.days)} Days </div>
                <div className="App-Hours">{this.leadingZero(this.state.hours)} Hours </div>
                <div className="App-Minutes">{this.leadingZero(this.state.minutes)} Minutes </div>
                <div className="App-Seconds">{this.leadingZero(this.state.seconds)} Seconds </div>
            </div>
        );
    }
}

export default Clock;