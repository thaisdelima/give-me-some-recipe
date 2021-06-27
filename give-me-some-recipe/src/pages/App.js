import "./App.css";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipePage from "./RecipePage";

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <Home />
              </header>
            </Route>
            <Route path="/recipe">
              <RecipePage />
            </Route>
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}
// function App() {
//   return (
//   );
// }

export default App;
