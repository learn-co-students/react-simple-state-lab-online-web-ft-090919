import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/> )// replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  // values is a function that creates an array called 'defRow'
  // then generates a new array with 10 elements and fills each element with the previously created array ('defRow')
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}