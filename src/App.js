import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import CustomComponent from "./CustomComponent";
import Counter from "./Counter";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import { useState } from "react";
function App() {
  // let flag = false;
  const [visible, setVisible] = useState(true);
  const butttonDisplayText = visible ? "HIDE" : "SHOW";
  return (
    <div className="App">
      {visible ? <Slider /> : <div>Hidden now</div>}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {butttonDisplayText}
      </button>
      {/* <Slider2 /> */}
      {/* {flag ? <Heading /> : <CustomComponent />} */}
      {/* <NavBar
        onShowDateTime={() => alert(new Date())}
        onShowGreeting={() => alert("Hello! how are you?")}
      ></NavBar>
      <Heading
        title="Learning React"
        const
        arrayofGreeting={["Assalamualaikum", "Hi", "Hello"]}
        myObj={{ name: "Nargis", location: "Sultana" }}
        addTwoNumbers={(firstNum, secondNum) => firstNum + secondNum}
      />
      <Counter starterValue={35} /> */}
    </div>
  );
}

function NavBar({ onShowDateTime, onShowGreeting }) {
  return (
    <div>
      <MyButton onClick={onShowDateTime}>Show Date Time</MyButton>
      <MyButton onClick={onShowGreeting}>Display Greeting</MyButton>
    </div>
  );
}
function showMessage() {
  alert("Current Date/time: " + new Date().toLocaleTimeString());
}
// function hoverFunc() {
//   console.log("we just hovered over the button...");
// }

function MyButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
export default App;
