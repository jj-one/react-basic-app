import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick = (e) => {
    if(e){
      e.preventDefault();
    }
    this.setState((prevState) => {
      return {isToggleOn: prevState.isToggleOn ? false : true};
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? "On" : "Off"}</button>
      </div>
    );
  }
}


// function ToggleButton() {
//   return <button onClick={() => alert("hello")} >Hello</button>;
// }

export default ToggleButton;