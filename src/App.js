import React, { Component } from 'react';


class App extends Component {
  state = {
  country:  [
      {
		"name": {
			"common": "India",
			"official": "Republic of India",
			"native": {
				"eng": {
					"official": "Republic of India",
					"common": "India"
				}
			}
		},
		"region": "Asia",
		"subregion": "Southern Asia",
		"languages": {
			"eng": "English",
			"hin": "Hindi",
			"tam": "Tamil"
		},
		"latlng": [20, 77],
		"demonym": "Indian",
		"landlocked": false,
		"borders": ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
		"area": 3287590
	},
	{
		"name": {
			"common": "British Indian Ocean Territory",
			"official": "British Indian Ocean Territory",
			"native": {
				"eng": {
					"official": "British Indian Ocean Territory",
					"common": "British Indian Ocean Territory"
				}
			}
		},
		"region": "Africa",
		"subregion": "Eastern Africa",
		"languages": {
			"eng": "English"
		},
		"latlng": [-6, 71.5],
		"demonym": "Indian",
		"landlocked": false,
		"borders": [],
		"area": 60
  }

]
  }

  render() {
        return (
      <div className="App">
      {this.state.country.map((country, index) =>
        <div  key = { index }>
        <li>
        <p>{country.name.common}</p>
        <p>{country.subregion}</p>
        <p>{ country.region}</p>
        </li>
      </div>)}
      </div>
    );
  }
}

export default App;
