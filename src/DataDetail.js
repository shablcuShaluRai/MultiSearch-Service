import React, { Component } from 'react'
import Reactable from 'reactable'

const Table = Reactable.Table,
      Thead = Reactable.Thead,
     Th = Reactable.Th,
     Tr = Reactable.Tr,
     Td = Reactable.Td;

export default class DataDetail extends Component{
  render(){
    let { data } = this.props;
    return (
 <div>
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
      data.map((data, index) =>
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
