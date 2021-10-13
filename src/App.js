import logo from './logo.svg';
import './App.css';
import ExampleHooks from "./Components/Hooks/ExampleHooks";
//import TestComponent  from "./Components/Test/TestComponent";
import CompA from './CompA';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CompA />




        {/* <TestComponent /> */}
        {/* <TestComponent name="kapil" eyeColor="blue" age="23"></TestComponent>
      <TestComponent name="Sachin" eyeColor="blue" ></TestComponent>
      <TestComponent name="Nikhil" age="23"></TestComponent>
      <TestComponent eyeColor="green" age="23"></TestComponent> */}
        {/* <ExampleHooks name="Sabesan" /> */}
      </header>
    </div>
  );
}

export default App;
