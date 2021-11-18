import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainBoard from "./containers/client/MainBoard/MainBoard";
import PageLogin from "./containers/shared/Auth/Login/PageLogin";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Switch>
        <Route path="/" exact component={MainBoard} />
        <ClientLayout path="/mainboard" Component={MainBoard} />
        <Route path="/login" component={PageLogin} />
      </Switch>
    </div>
  );
}

export default App;
