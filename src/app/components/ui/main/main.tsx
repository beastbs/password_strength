import { Switch, Route } from "react-router-dom";
import Home from "../../../layouts/home";
import Login from "../../../layouts/login";

import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
