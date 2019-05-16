import React from 'react';

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.startCountDown}>Start</button>
      </div>

    );
  }
}


export default StartButton;