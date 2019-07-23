import React, { Component } from 'react';
import { Redirect } from 'react-router';


class Routine extends Component {

  state = {
    currentRoutine: null,
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
