import React, { Component } from 'react';

const MY_FAVORITES = {
  food: 'steak',
  drink: 'Boulevard Wheat',
  music: 'Local Natives',
  candy: 'Double Stuffed Oreos',
  tv_show: 'Silicon Valley'
};

export default class ListExample extends Component {
  _renderList(obj){
    var items = []
    for(var key in obj){
      var title = key;
      var val = obj[key];
      items.push(<p><b>{title} --> </b>{val}</p>)
    }
    return items;
  }

  render() {
    return (
      <div>
        <h3>{this.props.ListTitle}</h3>
        {this._renderList(MY_FAVORITES)}
      </div>
    )
  }
}
