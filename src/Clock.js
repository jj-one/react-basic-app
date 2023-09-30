import React from "react";

class Clock extends React.Component {
  render() {
    return <h1>{this.props.date.toLocaleString()}</h1>;
  }
}

// function Clock(props) {
//   return <h1>{props.date.toLocaleString()}</h1>;
// }

export default Clock;