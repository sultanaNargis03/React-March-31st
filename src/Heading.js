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
  <div>
    <h1> {props.title}</h1>

    <h2>{props.arrayofGreeting}!</h2>
    <h3>{props.myObj.name}</h3>
    <h4>{props.addTwoNumbers(6, 10)}</h4>
  </div>
);
export default Heading;
