import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import Peoples from "./People";
import { useContext } from "react";
import ModeContext from "./ModeContext";

function Main() {
  let mode = useContext(ModeContext);
  let isLogin = mode.data.isLogin;
  let userInfo = mode.data.userInfo;
  let people = mode.data.people;
  let data = mode.data.data;

  return (
    <div className="page-content">
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Home isLogin={isLogin} userInfo={userInfo} />}
        />
        <Route path="/help" component={Help} />
        <Route
          path="/articles"
          exact
          component={() => <Articles isLogin={isLogin} data={data} />}
        />
        <Route
          path="/people"
          component={() => <Peoples isLogin={isLogin} people={people} />}
        />
        <Route path="/contact" component={Contact} />
        <Route
          path="/articles/:slug"
          component={({ match }) => (
            <Article isLogin={isLogin} slug={match.params.slug} />
          )}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
