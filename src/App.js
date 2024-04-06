import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import CustomComponent from "./CustomComponent";
function App() {
  let flag = false;

  return (
    <div className="App">
      {/* {flag ? <Heading /> : <CustomComponent />} */}
      <Heading
        title="Learning React"
        const
        arrayofGreeting={["Assalamualaikum", "Hi", "Hello"]}
        myObj={{ name: "Nargis", location: "Sultana" }}
        addTwoNumbers={(firstNum, secondNum) => firstNum + secondNum}
      />
    </div>
  );
}

export default App;
