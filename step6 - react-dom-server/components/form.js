import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../actions'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }
  handleChange(evt) {
    this.setState({
      description: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.addTask(this.state.description, this.props.history);
    this.setState({
      description: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
}



export default connect(null, { addTask })(TaskForm);
