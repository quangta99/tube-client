import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";

const Routes = ({ dataHandle, setDataHandle }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/video/:id">
        <Video />
      </Route>
    </Switch>
  );
};
export default Routes;
