import React from 'react';
import TimerInput from './TimerInput';
import ClockFace from './ClockFace';
import StartButton from './StartButton';
import Bell from './bell.mp3';
let bell = new Audio(Bell);

class Timer extends React.Component {

    constructor(props) {
        super(props);
        let min = props.time;
        if (min < 10) {
            min = "0" + min;
        }
        this.state = {
            seconds: '00',   // responsible for the seconds 
            minutes: min  // responsible for the minutes
        }
        this.secondsRemaining = '';
        this.intervalHandle = '';
        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }


    componentWillReceiveProps(nextprops) {
        if (nextprops.started && nextprops.taskIndex === 0) {
            this.startCountDown();
        }

        if (nextprops.timerType === "task") {
            this.secondsRemaining = ''
            clearInterval(this.intervalHandle)
            this.secondsRemaining = ''
            let min = nextprops.time;
            if (min < 10) {
                min = "0" + min;
            }

            this.setState({
                seconds: '00',   // responsible for the seconds 
                minutes: min  // responsible for the minutes
            })
            setTimeout(() => {

                this.startCountDown()
            }, 100);
        }
    }

    handleChange(event) {
        this.setState({
            minutes: event.target.value
        })
    }

    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }

        this.setState({
            minutes: min,
            seconds: sec
        })
        if (min === '00' & sec === '00') {
            // var promise = bell.play();
            // if (promise !== undefined) {
            //     promise.then(_ => {
            //         bell.play();
            //     }).catch(error => {
            //         console.log(error)
            //     });
            // }
            alert("time is up")
            clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
    }
    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle);
    }

    render() {
        return (
            <div>
                <TimerInput title={this.props.title} minutes={this.state.minutes} handleChange={this.handleChange} />
                <ClockFace minutes={this.state.minutes} seconds={this.state.seconds} />
                {/* <StartButton startCountDown={this.startCountDown} /> */}
            </div>

        );
    }
}

export default Timer