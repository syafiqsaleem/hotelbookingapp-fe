import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        {/* exact is important because all the components have / infront and this might cause the routing to not reach the desired page */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
