import React, { Component } from 'react';
import DataDetail from './DataDetail'
import * as DataApi from './utils/api'



class App extends Component {
  state = {
  data: []
    }

 componentDidMount(){
  DataApi.fetchData().then(data => this.setState({data}))
 }


  render() {
        return (
      <div className="App">

        <DataDetail data = {this.state.data} />
      </div>
    );
  }
}

export default App;
