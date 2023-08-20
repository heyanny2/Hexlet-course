/*Create a registration form:
--- email - input email
--- password - input password
--- address - textarea
--- city - text input
--- country - select: Argentina, Russia, China.
--- Accept Rules - checkbox.

When clicking Sign in, form should be changed on a table with all entered data. 
Click on "Back" returns you to the form editing.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/WNLbQyq

import ReactDOM from 'react-dom/client';
import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      submitted: 'filling',
    };
  }

  handleChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: 'submitted',
    });
  };

  handleBackToForm = () => {
    this.setState({
      submitted: 'filling',
    });
  };

  renderResult = () => {
    const {
      acceptRules,
      address,
      city,
      country,
      email,
      password,
    } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleBackToForm}>Back</button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{`${acceptRules}`}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  renderForm = () => {
    const {
      acceptRules,
      address,
      city,
      country,
      email,
      password,
    } = this.state;

    return (
      <form name="myForm" onSubmit={this.handleSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={this.handleChange} value={email} id="email" placeholder="Email" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input type="password" name="password" className="form-control" onChange={this.handleChange} value={password} id="password" placeholder="Password" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea type="text" className="form-control" onChange={this.handleChange} value={address} name="address" id="address" placeholder="1234 Main St" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" className="form-control" onChange={this.handleChange} value={city} name="city" id="city" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" name="country" className="form-control" value={country} onChange={this.handleChange}>
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" onChange={this.handleChange} checked={acceptRules} />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  };

  render() {
    const { submitted } = this.state;
    switch (submitted) {
      case 'filling':
        return this.renderForm();
      case 'submitted':
        return this.renderResult();
      default:
        throw new Error(`Ukknown state - ${submitted}`);
    }
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('container'));
