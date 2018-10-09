import React from "react";
import PropTypes from "prop-types";

class PlayerInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    label: "Username"
  };

  state = {
    username: ""
  };

  handleChange = event => {
    // Note in React we cant destructure event's by the time callback function is run this event will be lost
    const value = event.target.value;
    this.setState(() => ({ username: value }));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  };
  render() {
    const { username } = this.state;
    const { label } = this.props;
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          value={username}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!username}>
          Submit
        </button>
      </form>
    );
  }
}

export default PlayerInput;
