import React, { Component } from 'react'

export default class LifeCycle extends Component{

  constructor(props)
  {
        super(props);
        this.state={favColor:"yellow"}
  }
  componentDidMount()
  {
    setTimeout(()=>{this.setState({favColor:"blue"})},5000)
  }

  shouldComponentUpdate()
  {
    return true
  }

  getSnapshotBeforeUpdate(prevprops,prevState)
  {
        document.getElementById("id1").innerHTML="Previous value"+prevState.f