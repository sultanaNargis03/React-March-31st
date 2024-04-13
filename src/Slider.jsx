import React from "react";

export default class Slider extends React.Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1496545672447-f699b503d270?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    index: 0,
  };

  nextImageOnClick = () => {
    if (this.state.index < 4) {
      console.log(this.state.index);
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  previousImageOnClick = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.state.images[this.state.index]}
          style={{
            height: 450,
            width: 450,
          }}
          alt="A Travel Image for the Slider"
        ></img>

        <button onClick={this.nextImageOnClick}>Next</button>
        <button onClick={this.previousImageOnClick}>Previous</button>
      </div>
    );
  }
}
