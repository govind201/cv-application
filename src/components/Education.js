import React from "react";
import "../styles/form.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      title: "",
      date: "",
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
    const { school, title, date, isEditing } = this.state;

    return (
      <div className="section">
        <h2 className="section-title">Educational Experience</h2>
        {isEditing ? (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <label>School:</label>
            <input
              className="input-field"
              type="text"
              name="school"
              value={school}
              onChange={this.handleInputChange}
            />
            <label>Title of Study:</label>
            <input
              className="input-field"
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
            <label>Date of Study:</label>
            <input
              className="input-field"
              type="date"
              name="date"
              value={date}
              onChange={this.handleInputChange}
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p>School: {school}</p>
            <p>Title of Study: {title}</p>
            <p>Date of Study: {date}</p>
            <button className="edit-btn" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
