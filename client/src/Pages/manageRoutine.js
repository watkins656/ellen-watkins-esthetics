import React, { Component } from 'react';
import { Redirect } from 'react-router';


class Routine extends Component {

  state = {
    currentRoutine: null,
  }

  createTask(){
    alert('task creation here')
  }

  componentWillMount() {
    this.setState({
      currentRoutine: this.props.routine,
    })
  }




  render() {
    let style = {
      background: 'black',
      color: 'white'
    }

    return (
      <div >
        <div className="row">
          <div className="col border" >
           <button class="btn" onClick={this.createTask}>
                    <span class="badge badge-primary">Create new task</span>
           </button>
            
          </div>
        </div>

        <div className="row">
          <div className="col border">
          </div>
        </div>

      </div>
    );
  }
}

export default Routine;
