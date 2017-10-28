import React, { Component } from 'react'
import Reactable from 'reactable'
import escapeRegExp from 'escape-string-regexp'

const Table = Reactable.Table,
      Thead = Reactable.Thead,
     Th = Reactable.Th,
     Tr = Reactable.Tr,
     Td = Reactable.Td;

export default class DataDetail extends Component{

  state ={
    countrySearch:'',
    capitalSearch:'',
    regionSearch: '',
    currencySearch:''
  }

  updateCountrySearch = (countrySearch) =>{
    this.setState({countrySearch:countrySearch.trim()})
  }

  updateCapitalSearch = (capitalSearch) => {
    this.setState({capitalSearch:capitalSearch.trim()})
  }

  updateRegionSearch = (regionSearch) => {
    this.setState({regionSearch:regionSearch.trim()})
  }

  updateCurrencySearch = (currencySearch) => {
    this.setState({currencySearch:currencySearch.trim()})
  }

  render(){
    let {data} = this.props;
    let { countrySearch, capitalSearch, regionSearch, currencySearch } = this.state;
    let showingCountry

    if (countrySearch) {
      console.log("countrySearch", countrySearch);
      const match = new RegExp(escapeRegExp(countrySearch), 'i')
      showingCountry = data.filter((country) => match.test(country.name.common))

    } else if (capitalSearch) {
      const match = new RegExp(escapeRegExp(capitalSearch), 'i')
      showingCountry = data.filter((country) => match.test(country.capital))

    } else if (regionSearch) {
     const match = new RegExp(escapeRegExp(regionSearch), 'i')
     showingCountry = data.filter((country) => match.test(country.region))
     }  else if (currencySearch) {
      const match = new RegExp(escapeRegExp(currencySearch), 'i')
      showingCountry = data.filter((country) => match.test(country.currency))
      } else {
     showingCountry = data
   }
    return (
 <div>
 <input
 placeholder= "search by country name"
 type="text"
 value= {this.state.countrySearch}
 onChange= {event => this.updateCountrySearch(event.target.value)}
 />

 <input
 placeholder= "search by capital name"
 type="text"
 value= {this.state.capitalSearch}
 onChange= {event => this.updateCapitalSearch(event.target.value)}
 />
 <input
 placeholder= "search by region name"
 type="text"
 value= {this.state.regionSearch}
 onChange= {event => this.updateRegionSearch(event.target.value)}
 />
 <input
 placeholder= "search by currency"
 type="text"
 value= {this.state.currencySearch}
 onChange= {event => this.updateCurrencySearch(event.target.value)}
 />
 <Table>
  <Thead>
    <Th column="number">#</Th>
    <Th column="Country">Country</Th>
    <Th column="Capital">Capital</Th>
    <Th column="Region">Region</Th>
    <Th column="Subregion">Subregion</Th>
    <Th column="Currency">Currency</Th>
    <Th column="Latitude">Latitude</Th>
    <Th column="Longitude">Longitude</Th>
    </Thead>
    {
      showingCountry.map((data, index)  =>
       <Tr key={index}>
       <Td column="number">{index + 1}</Td>
       <Td column="Country">{data.name.common}</Td>
       <Td column="Capital">{data.capital}</Td>
       <Td column="Region">{data.region}</Td>
       <Td column="Subregion">{data.subregion}</Td>
       <Td column="Currency">{data.currency}</Td>
       <Td column="Latitude">{data.latlng[0]}</Td>
       <Td column="Longitude">{data.latlng[1]}</Td>

       </Tr>
      )
    }

</Table>
</div>
    )
  }
}
