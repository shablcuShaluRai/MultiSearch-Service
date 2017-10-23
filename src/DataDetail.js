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
    <Th column="Region">Region</Th>
    <Th column="Subregion">Subregion</Th>
    </Thead>
    {
      data.map((data, index) =>
       <Tr key={index}>
       <Td column="number">{index + 1}</Td>
       <Td column="Country">{data.name.common}</Td>
       <Td column="Region">{data.region}</Td>
       <Td column="Subregion">{data.subregion}</Td>
       </Tr>
      )
    }

</Table>
</div>
    )
  }
}
