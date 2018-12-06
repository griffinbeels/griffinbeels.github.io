import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
        //use a new component to construct our list :)
        return <li key={item.name}>
              <ListItem name = {item.name} icon = {item.icon} rank = {item.rank} type = {item.type} weight = {item.weight}/>
              </li>
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
