import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import About  from "./components/Pages/About";
import FirstName from "./components/Pages/FirstName";
import Clock from "./components/Clock";
import  { Blog }  from "./components/Pages/Blog";

import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Clock />


        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/firstname" component={FirstName} />
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
