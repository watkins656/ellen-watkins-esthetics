import React from 'react';

class ClockFace extends React.Component {
  render() {
    let clockStyle={
      fontSize:"15vw",
      marginBlockStart: '.1em',
      marginBlockEnd: '.1em',
      color: 'white',
      background:'black'
    }
    return (
      <div style={clockStyle}>
        <h1  style={clockStyle}> {this.props.minutes}:{this.props.seconds}</h1>
      </div>
    );
  }
}


export default ClockFace;