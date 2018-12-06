import React, { Component } from 'react';
import MeleeLogo from "./icons/smashmeleelogo.png"

class Header extends Component {
    render() {
          console.log(this.props.query);
          var text = "Currently searching for characters containing: " + this.props.query;
          if (this.props.query == ""){
              text = "Try searching for a specific character!";
          }
        return (
        <div>
            <h1>Welcome to the Smash Melee Character List.
                <img className = "App-logo"src= {MeleeLogo}/>
            </h1>
          <h5>
          {"You are filtering by:  character type = " + this.props.type + ", rank order =  " + this.props.rankType + ", weight class =  " + this.props.weight}
          </h5>
          <h5>
          {text}
          </h5>
        </div>
        );
    }
}

export default Header;
