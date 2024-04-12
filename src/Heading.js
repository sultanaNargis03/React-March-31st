import { Component } from "react";

// class Heading extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi there!</h1>
//            <h2>It is class Component</h2>
//       </div>
//     );
//   }
// }

//create componet the function way:the modern way
// function Heading() {
//   return (
//     <div>
//       <h1>it is functionional component</h1>
//     </div>
//   );
// }

//create component with arrow function
const Heading = (props) => (
  <a>
    <div> {props.title}</div>

    <div>{props.arrayofGreeting}!</div>
    <div>{props.myObj.name}</div>
    <div>{props.addTwoNumbers(6, 10)}</div>
  </a>
);
export default Heading;
