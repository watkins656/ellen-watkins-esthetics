import React from 'react';

class Task extends React.Component {
    render() {
        return (<div>
            <header className="App-header">
                <h1>
                    {this.props.name}
                </h1>
            <button className="btn" onClick={this.props.click}>
                    Completed!
            </button>
            </header>
        </div>
        );
    }
}


export default Task;


