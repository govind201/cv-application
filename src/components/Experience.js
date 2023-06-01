import React from "react";
import "../styles/form.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      tasks: "",
      from: "",
      to: "",
      isEditing: true,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const { company, position, tasks, from, to, isEditing } = this.state;

    return (
      <div className="section">
        <h2 className="section-title">Practical Experience</h2>
        {isEditing ? (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <label>Company:</label>
            <input
              className="input-field"
              type="text"
              name="company"
              value={company}
              onChange={this.handleInputChange}
            />
            <label>Position:</label>
            <input
              className="input-field"
              type="text"
              name="position"
              value={position}
              onChange={this.handleInputChange}
            />
            <label>Main Tasks:</label>
            <input
              className="input-field"
              type="text"
              name="tasks"
              value={tasks}
              onChange={this.handleInputChange}
            />
            <label>From:</label>
            <input
              className="input-field"
              type="date"
              name="from"
              value={from}
              onChange={this.handleInputChange}
            />
            <label>To:</label>
            <input
              className="input-field"
              type="date"
              name="to"
              value={to}
              onChange={this.handleInputChange}
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p>Company: {company}</p>
            <p>Position: {position}</p>
            <p>Main Tasks: {tasks}</p>
            <p>From: {from}</p>
            <p>To: {to}</p>
            <button className="edit-btn" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
