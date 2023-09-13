/*Make Autocomplete component that has an input field and returns a list of countries starting with that letter(s) while you're typing.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/WNLOREy

import axios from 'axios';
import React from 'react';
import ReactDOM from "react-dom";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '', countries: [] };
  }

  handleChange = async (e) => {
    const { target } = e;
    const { value } = target;
    if (value === '') {
      this.setState({ input: '', countries: [] });
      return;
    }
    this.setState({ input: value });
    const res = await axios.get(`https://autocomplete.travelpayouts.com/places2?term=${value}&locale=en&types[]=country`);
    const data = res.data;
    let resultCountries = data.map(country => country.name).filter(country => country.startsWith(_.upperFirst(value)))
    this.setState({ countries: resultCountries });
  };

  renderCountries = () => {
    const { countries } = this.state;
    return (
      <ul>
        {countries.map((country) => <li key={country}>{country}</li>)}
      </ul>
    );
  };

  render() {
    const { countries, input } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            value={input}
            onChange={this.handleChange}
          />
        </form>
        {countries.length > 0 && this.renderCountries()}
      </div>
    );
  }
}

ReactDOM.render(<Autocomplete />, document.getElementById("container"));
