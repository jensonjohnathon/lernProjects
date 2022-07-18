import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };
      
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    
    tick() {
        this.setState({
          date: new Date()
        });
        var timerMilli1 = Date();
        var timerMilli = Date.parse(timerMilli1) - Date.parse(localStorage.getItem("nDateKey"));
        localStorage.setItem('timerMilliKey', timerMilli.toString());
    };

    setTimeTimer() {
        var nDate = Date();
        localStorage.setItem('nDateKey', nDate);
    };

    render() {
        var timerCorrect1 = Number(localStorage.getItem("timerMilliKey"));
        var diff = this.state.date.getTimezoneOffset();
        diff = diff + 60;
        var timerCorrect = new Date(timerCorrect1 + diff * 60000);
        console.log(diff);
        console.log(timerCorrect);
        return (
            <div>
                <h1>Timer</h1>
                <button onClick={this.setTimeTimer}>Start</button>
                <button onClick={this.setTimeStop}>Stop</button>
                <h2>{timerCorrect.toLocaleTimeString('en-GB')}</h2>
            </div>
        );
    };
};

export default Timer;