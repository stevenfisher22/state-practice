import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }

    handleAdd = (action) => {
        console.log('Child says:', action);

        // actionCount is incremented
        // The new count replaces the existing one
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    handleRemove = (action) => {
        this.setState({
            actionCount: this.state.actionCount - 1
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

function Child({onAction}) {
    return (
        <div>
            <button onClick={onAction.handleAdd}>
                Add!
            </button>
            <button onClick={onAction.handleRemove}>
                Remove!
            </button>
        </div>
    )
}


ReactDOM.render(<CountingParent />, document.querySelector('#root'))