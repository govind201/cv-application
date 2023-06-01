import React from "react";
import "../styles/form.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
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
    const { name, email, phone, isEditing } = this.state;

    return (
      <div className="section">
        <h2 className="section-title">General Information</h2>
        {isEditing ? (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              className="input-field"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <label>Email:</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <label>Phone:</label>
            <input
              className="input-field"
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button className="edit-btn" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
