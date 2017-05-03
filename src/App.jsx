import React, { Component } from "react";
import Clock from "./Clock";
import "./App.css"
import { Form, FormControl } from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString(),
            newDeadLine: new Date().toDateString()
        }
        this.changeDate = this.changeDate.bind(this);
        this.updateChangeDate = this.updateChangeDate.bind(this);
    }
    changeDate() {
        this.setState({ deadline: this.state.newDeadLine });
    }

    updateChangeDate(value) {
        this.setState({ deadline: new Date(value).toDateString() })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown from {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <Form inline >
                    <FormControl className="Dealine-input" type="Date" onChange={(event) => this.updateChangeDate(event.target.value)} placeholder="Ënter Date" />
                </Form>
            </div>
        );
    }
}

export default App;