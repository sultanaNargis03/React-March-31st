import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import CustomComponent from "./CustomComponent";
function App() {
  let flag = false;

  return <div className="App">{flag ? <Heading /> : <CustomComponent />}</div>;
}

export default App;
