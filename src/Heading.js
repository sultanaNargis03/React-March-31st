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
const Heading = () => (
  <div>
    <h1>it is a component with arrow function</h1>
  </div>
);
export default Heading;
