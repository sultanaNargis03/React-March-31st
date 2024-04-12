import { Component } from "react";

export default class extends Component {
  state = {
    count: this.props.starterValue,
  };
  incrementOnClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Current value of count is: " + this.state.count);
  };
  decrementOnClick = () => {
    this.setState({ count: this.state.count - 1 });
    console.log("Current value of count is: " + this.state.count);
  };

  render() {
    return (
      <div>
        <div>Button click counter:{this.state.count}</div>
        <button onClick={this.incrementOnClick}>Increment</button>
        <button onClick={this.decrementOnClick}>Decrement</button>
      </div>
    );
  }
}
