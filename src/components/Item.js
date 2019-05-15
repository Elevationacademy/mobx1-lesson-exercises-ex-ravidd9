import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx';

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let item = this.props.item
    let location = prompt("Please enter your name", item.location)
    if (location != null) {
      this.props.store.editItem(item.name, location)
    }
  }
  deleteItem = () => {
    let item = this.props.item
    this.props.store.deleteItem(item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onChange={this.checkItem}/>
        <span>{item.name} </span> - 
        <span> {item.location}</span>
        <button onClick={this.editItem}>editButton</button>
        <button onClick={this.deleteItem}>delete</button>
      </div>)
  }
}

export default Item