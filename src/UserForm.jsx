import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      student: '',
      about: '',
      occupation: '',
    };
  }

  handelChange = (event) => {
    const { name, value, checked, type } = event.target

    const val = type === 'checkbox'
      ? checked
      : value

    this.setState({
      [name]: val,
    })
  }

  handelSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handelSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handelChange}
            className="form-input"
            value={this.state.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            value={this.state.student}
            type="checkbox"
            id="student"
            name="student"
            onChange={this.handelChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            value={this.state.occupation}
            name="occupation"
            className="form-input"
            onChange={this.handelChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            onChange={this.handelChange}
            value={this.state.about}
            className="form-input"
          ></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
