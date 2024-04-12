import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import CustomComponent from "./CustomComponent";
import Counter from "./Counter";
function App() {
  let flag = false;

  return (
    <div className="App">
      {/* {flag ? <Heading /> : <CustomComponent />} */}
      <NavBar
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
      <Counter starterValue={35} />
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
