// import logo from "../logo.svg";
import "./App.css";
import Home from "./Home";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </ChakraProvider>
  );
}
// function App() {
//   return (
//   );
// }

export default App;
