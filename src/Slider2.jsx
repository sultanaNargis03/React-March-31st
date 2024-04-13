import React from "react";

export default class Slider2 extends React.Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1603926295083-850ecd5fa6ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601767770428-265b2c67780c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZydWl0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFUG4xZHhTRlltNHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1622011819061-9b993fd72d12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    index: 0,
  };
  nextImageOnClick = () => {
    if (this.state.index < 6) {
      console.log(this.state.index);
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  previousImageOnClick = () => {
    if (this.state.index > 0) {
      console.log(this.state.index);
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
            height: 600,
            width: 450,
          }}

          //   alt="A Fruit image for this slider"
        />
        <button onClick={this.nextImageOnClick}>Next</button>
        <button onClick={this.previousImageOnClick}>Previous</button>
      </div>
    );
  }
}
