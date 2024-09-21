import { Fragment } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.authReducer.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
