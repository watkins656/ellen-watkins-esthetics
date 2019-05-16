import React, { Component } from 'react';
import Timer from '../Timer/Timer.js'
import CurrentTask from '../Task/Task.js'
import '../../App.css';


class Routine extends Component {

  state = {
    currentRoutine: null,
    taskIndex: -1,
    currentTask: null,
    started: false,
    routineTimerRunning: false,
    taskTimerRunning: false,

  }

  componentWillMount() {
    this.setState({
      currentRoutine: this.props.routine,
      currentTask: this.props.routine.tasks[0]
    })
  }
  taskIterator = () => {
    let newIndex = this.state.taskIndex + 1;
    if (newIndex < this.state.currentRoutine.tasks.length) {
      this.setState({
        currentTask: this.state.currentRoutine.tasks[newIndex],
        taskIndex: newIndex
      })
    }
    else { alert("Routine Completed") }

  }

  taskCompleted = () => {
    this.taskIterator()
  }

  start = () => {
    let newIndex = this.state.taskIndex + 1;
    this.setState({
      started: true,
      routineTimerRunning: true,
      taskIndex: newIndex
    })

  }

  render() {
    let style = {
      background: 'black',
      color: 'white'
    }
    return !this.state.currentTask ?
      (false)
      :
      <div >
        <div className="row timers" style={style}>
          <div className="col-6 border">
            <Timer timerType="routine" started={this.state.started} taskIndex={this.state.taskIndex} title={this.state.currentRoutine.name} time={this.state.currentRoutine.totalTime} />
          </div>
          <div className="col-6 border">
            <Timer timerType="task" started={this.state.started} taskIndex={this.state.taskIndex} title={this.state.currentTask.name} time={this.state.currentTask.time} />
          </div>
        </div>
        <div className="row">
          <div className="col border">
            {this.state.started ? (
              <div className="row">
                <div className="col border">
                  <CurrentTask
                    name={this.state.currentTask.name}
                    click={this.taskCompleted}
                  />
                </div>
              </div>
            )
              : <button className="btn-success btn btn-lg btn-block" onClick={this.start}>Start</button>
            }
          </div>
        </div>

        <div className="row">
          <div className="col border">
            <button className="btn btn-danger btn-lg btn-block" onClick={this.props.back.bind(this)}>Back</button>
          </div>
        </div>

      </div>
      ;
  }
}

export default Routine;
