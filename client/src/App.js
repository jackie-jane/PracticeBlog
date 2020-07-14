import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Blog from "./components/blogdummy";
import Main from "./screens/main";

import "./App.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </main>
  );
}

export default App;
