import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Auth from "./Auth";
import articles from "./data.json";
import people from "./got.json";
import "./styles.css";
import verifyLogin from "./utils";
import ErrorBoundary from "./ErrorBoundary";
import ModeContext from "./ModeContext";

class App extends React.Component {
  state = {
    navClosed: false,
    isLogin: false,
    isModalOpen: false,
    data: null,
    userInfo: null,
    people: people,
    email: "",
    password: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };

  handleModal = (isOpen) => {
    this.setState({ isModalOpen: isOpen });
  };

  loginHandler = (email, password) => {
    console.log(email, password);
    verifyLogin(email, password).then((res) => {
      console.log(res);
      this.setState({
        isLogin: true,
        userInfo: res,
        data: articles,
      });
    });
  };

  logoutHandler = () => {
    this.setState({
      isLogin: false,
      data: null,
      people: null,
    });
  };

  render() {
    const { isLogin, data, userInfo } = this.state;

    return (
      <div className={`container ${this.state.navClosed ? "nav-closed" : ""}`}>
        <ModeContext.Provider
          value={{
            data: this.state,
            changeNavbar: this.changeNavbar,
            handleModal: this.handleModal,
            loginHandler: this.loginHandler,
            logoutHandler: this.logoutHandler,
            handleInput: this.handleInput,
          }}
        >
          <Header />
          <div className="main">
            <Sidebar userInfo={userInfo} isLogin={isLogin} />
            <ErrorBoundary>
              <Main />
            </ErrorBoundary>
          </div>
          {this.state.isModalOpen ? <Auth /> : ""}\{" "}
        </ModeContext.Provider>
      </div>
    );
  }
}

export default App;
