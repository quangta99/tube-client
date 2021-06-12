import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./routes";
import Header from "./Shares/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
