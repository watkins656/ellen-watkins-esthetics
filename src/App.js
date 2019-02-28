import React, { Component } from 'react';
import Timer from './Components/Timer/Timer.js'
import CurrentTask from './Components/Task/Task.js'
import './App.css';
import Routine from './Components/Routine/Routine'


let routines = {
  night: {
    name: "Night Routine",
    totalTime: null,
    tasks: [
      {
        name: "Brush Teeth",
        time: 1
      },
      {
        name: "Chammomile Tea",
        time: 5
      },
    ],
  },
  office: {
    name: "Office Routine",
    totalTime: null,
    tasks: [
      {
        name: "Sort the sort pile",
        time: 5
      },
      {
        name: "Run Errands",
        time: 5
      },
      {
        name: "Add Action Items Pile to Tasks",
        time: 5
      },

    ],
  },
  basement: {
    name: "Basement Routine",
    totalTime: null,
    tasks: [
      {
        name: "Water Plants",
        time: 1
      },
      {
        name: "Break Down Boxes",
        time: 5
      },
      {
        name: "Sweep",
        time: 5
      },
      {
        name: "Empty and start Roomba",
        time: 5
      },
      {
        name: "Empty the'Upstairs to Basement' transfer box",
        time: 5
      },

    ],
  },
  morning: {
    name: "Morning Routine",
    totalTime: null,
    tasks: [
      {
        name: "Make Bed",
        time: 1
      },
      {
        name: "Coffee",
        time: 5
      },
      {
        name: "Laundry",
        time: 10
      },
      {
        name: "Take out Trash",
        time: 3
      },
      {
        name: "Dishes",
        time: 5
      },
      {
        name: "Brush Teeth",
        time: 2
      },
      {
        name: "Feed and Water Dog",
        time: 2
      },

      {
        name: "Give Izaak Medicine/Nails/Hair/Bath",
        time: 3
      },
      {
        name: "Wipe Kitchen Counters",
        time: 5
      },
      {
        name: "Breakfast - check weekly meal plan",
        time: 5
      },
      {
        name: "Take Medicine",
        time: 1
      },
      {
        name: "Lotion",
        time: 2
      },
      {
        name: "Shave",
        time: 5
      },
      {
        name: "Shower",
        time: 5
      },
      // {
      //   name: "Study",
      //   time: 5
      // },
      {
        name: "Groom Izaak",
        time: 5
      },
      {
        name: "Vaccuum",
        time: 5
      },
      {
        name: "Clean Kitchen Table",
        time: 5
      },
      // {
      //   name: "Review Notes from Phone",
      //   time: 5
      // },
      // {
      //   name: "Yardwork", 
      //   time: 5
      // },
      // {
      //   name: "Scoop Izaaks Poop	",
      //   time: 5
      // },
      // {
      //   name: "Walk Izaak",
      //   time: 15
      // },
      // {
      //   name: "Yoga",
      //   time: 5
      // },
      // {
      //   name: "Meditate",
      //   time: 15
      // },
      // {
      //   name: "Motivational video",
      //   time: 5
      // },
      // {
      //   name: "Cardio",
      //   time: 5
      // },
    ],
  },

}

let getTotalTime = (array) => {
  let totalTime = 0;
  array.tasks.forEach(task => {
    totalTime += task.time;
  });
  array.totalTime = totalTime;
}
getTotalTime(routines.morning);
getTotalTime(routines.night);
getTotalTime(routines.basement);
getTotalTime(routines.office);



class App extends Component {

  state = {
    currentRoutine: null,
    taskIndex: -1,
    currentTask: null,
    started: false,
    routineTimerRunning: false,
    taskTimerRunning: false,

  }


  taskIterator = () => {
    let newIndex = this.state.taskIndex + 1;
    this.setState({
      currentTask: this.state.currentRoutine.tasks[newIndex],
      taskIndex: newIndex
    })

  }
back(){
  this.setState({
    currentRoutine: null,
    taskIndex: -1,
    currentTask: null,
    started: false,
    routineTimerRunning: false,
    taskTimerRunning: false,
 })
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
  routineSelector = (e) => {
    e.preventDefault()
    let name = (e.target.id)
    let routine = getRoutine(name);
    console.log(routine);
    this.setState({
      currentRoutine: routine
    })
    function getRoutine(name) {
      console.log("getting routine for " + name);
      return routines[name]
    };
  }

  render() {
    console.log('render with currentRoutine: '+ this.state.currentRoutine);

    return (

      <div className="App">
        {this.state.currentRoutine === null ? (
          <div>
            <h1>
              Choose a routine
            </h1>
            <button onClick={this.routineSelector.bind(this)} id="morning">Morning Routine</button>
            <button onClick={this.routineSelector.bind(this)} id="night">Night Routine</button>
            <button onClick={this.routineSelector.bind(this)} id="basement">Basement Routine</button>
            <button onClick={this.routineSelector.bind(this)} id="office">Office Routine</button>
          </div>
        ) : <Routine routine={this.state.currentRoutine} back={this.back.bind(this)} />}
      </div>

    )
  }
}

export default App;
