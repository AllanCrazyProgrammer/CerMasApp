import React from "react";
import "../../styles/navbar.css";
import bar from "../../img/navbar.png";
import logo from "../../img/logo.png";
import LoginModal from "../Modals/LoginModal";
import SigninModal from "../Modals/SigninModal";
import Store from "../../utils/Store";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      showSigninModal: false
    };
  }

  toggleModal = modal => {
    this.setState({
      [modal]: !this.state[modal]
    });
  };

  render() {
    const { token } = Store.get("userData");
    return (
      <nav className="navbar">
        <img src={bar} alt="navbar" className="bar" />
        <img href="/" className="logo" src={logo} alt="navbar" />

        {!token ? (
          <div className="nav-btns">
            <button
              className="login-btn"
              onClick={() => {
                this.toggleModal("showLoginModal");
              }}
            >
              Log&nbsp;in
            </button>
            <button
              className="signin-btn"
              onClick={() => {
                this.toggleModal("showSigninModal");
              }}
            >
              Sign&nbsp;in
            </button>
          </div>
        ) : (
          <button className="signout-btn">Sign&nbsp;Out</button>
        )}

        {this.state.showLoginModal ? (
          <LoginModal
            closeModal={() => {
              this.toggleModal("showLoginModal");
            }}
          />
        ) : null}
        {this.state.showSigninModal ? (
          <SigninModal
            closeModal={() => {
              this.toggleModal("showSigninModal");
            }}
          />
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
