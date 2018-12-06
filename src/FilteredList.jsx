import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import './App.css';
import Header from './Header';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: "All",
      rankType: "Default",
      weightType: "All",
      filterTextOne: "Filter by Type: All",
      filterTextTwo: "Sort by Rank: Default",
      filterTextThree: "Filter by Weight: All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  /**
  * Method for updating our type requirements after being selected by a user.
  * This method updates the text for consistency and updates the type state.
  */
  onFilter = (event) => {
    this.setState({type: event});
    this.setState({filterTextOne: "Filter by Type: " + event})
  }

  /**
  * Method for updating our rank requirements after being selected by a user.
  * This method updates the text for consistency and updates the rankType state.
  */
  onFilterRank = (event) => {
    this.setState({rankType: event});
    this.setState({filterTextTwo: "Sort by Rank: " + event})
  }

  /**
  * Method for updating our rank requirements after being selected by a user.
  * This method updates the text for consistency and updates the rankType state.
  */
  onFilterWeight = (event) => {
    this.setState({weightType: event});
    this.setState({filterTextThree: "Filter by Weight: " + event})
  }

  /**
  * Method for filtering our itemList depending on type.
  * This method takes in a single item and determines if it meets the filter reqs.
  * Method pulled from the React Lab
  */
  filterItem = (item) => {
      if (this.state.type === "All"){
        return item.name.toLowerCase().search(this.state.search) !== -1;
      } else{
        if (item.name.toLowerCase().search(this.state.search) !== -1 && item.type.search(this.state.type)  !== -1){
          return true;
        }
        return false;
      }
  }

  /**
  * Method for filtering our itemList depending on weight.
  * This method takes in a single item and determines if it meets the filter reqs.
  * Method pulled from the React Lab
  */
  filterItemWeight = (item) => {
      if (this.state.weightType === "All"){
        return true;
      } else{
        if (item.weight.search(this.state.weightType)  !== -1){
          return true;
        }
        return false;
      }
  }


  /**
  * Method for filtering our itemList depending on rank.
  * This method is called after it was pre-filtered by type.
  * Method pulled from w3schools
  * @return itemList, our newly sorted list of items
  */
  filterItemRank = (itemList) => {
       if (this.state.rankType === "Default"){
         return itemList;
       } else if (this.state.rankType === "Ascending"){
         return itemList.sort(function(a, b){return a.rank-b.rank});
       } else{
         return itemList.sort(function(a, b){return b.rank-a.rank});
       }
  }

  /**
  * Method for rendering our stuff;
  * creates a search bar, then creates two dropdown menus, one for type and one for
  * rank.  Then the render method filters first by type and then rank, and returns
  * the resulting filtered list.
  */
  render(){
    return (
        <div className = "filter-list">
          <Header rankType = {this.state.rankType} type = {this.state.type} query = {this.state.search} weight = {this.state.weightType}/>

          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />

          <div>
                <DropdownButton
                     title = {this.state.filterTextOne}
                     key = {0}
                     id = {`dropdown-basic-${0}`}
                     onSelect = {this.onFilter}>
                                    <MenuItem eventKey={"Floaties"}>Floaties</MenuItem>
                                    <MenuItem eventKey={"Spacies"}>Spacies</MenuItem>
                                    <MenuItem eventKey={"Fast Fallers"}>Fast Fallers</MenuItem>
                                    <MenuItem eventKey={"All"}>All</MenuItem>
                </DropdownButton>

                <DropdownButton
                     title = {this.state.filterTextTwo}
                     key = {1}
                     id = {`dropdown-basic-${1}`}
                     onSelect = {this.onFilterRank}>
                                    <MenuItem eventKey={"Ascending"}>Ascending</MenuItem>
                                    <MenuItem eventKey={"Descending"}>Descending</MenuItem>
                                    <MenuItem eventKey={"Default"}>Default</MenuItem>
                </DropdownButton>

                <DropdownButton
                     title = {this.state.filterTextThree}
                     key = {2}
                     id = {`dropdown-basic-${2}`}
                     onSelect = {this.onFilterWeight}>
                                    <MenuItem eventKey={"Light"}>Light</MenuItem>
                                    <MenuItem eventKey={"Medium"}>Medium</MenuItem>
                                    <MenuItem eventKey={"Heavy"}>Heavy</MenuItem>
                                    <MenuItem eventKey={"All"}>All</MenuItem>
                </DropdownButton>
          </div>

          <List items = {this.filterItemRank(this.props.items.filter(this.filterItem)).filter(this.filterItemWeight)} />
        </div>
    );
  }
}

export default FilteredList;
