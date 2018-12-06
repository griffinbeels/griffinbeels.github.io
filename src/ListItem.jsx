import React, { Component } from 'react';
import './App.css';
/**
* Component created to represent each individual list item in our FilteredList;
* this allows for easy manipulation of each item and allows it to be extended
* very easily to other projects!
*/
class ListItem extends Component {
    render() {
        return (
          <div>
                <meme>
                <img src= {this.props.icon} width = "100" />
                </meme>
                <h3>{this.props.name + " / Rank " + this.props.rank + " / " + this.props.type + " / " + this.props.weight}</h3>
          </div>
        );
    }
}

export default ListItem;
