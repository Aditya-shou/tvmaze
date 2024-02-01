import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path = "/singleshow/:id" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
