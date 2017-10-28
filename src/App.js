import React, { Component } from 'react';
import DataDetail from './DataDetail'
import * as DataApi from './utils/api'


export default class App extends Component {
  state = {
  data: []
    }

 componentDidMount(){
  DataApi.fetchData().then(data => this.setState({data}))
 }

  render() {
        return (
         <div>
          <h1 align="center">Country/Capital search</h1>
          <DataDetail data = {this.state.data} />
        </div>
    );
  }
}
