import React from 'react';
import { Link } from 'react-router-dom';
import resetCSS from '../../stylesheets/reset.css';
import splashCSS from '../../stylesheets/splash.css';
import BusinessSearch from '../business/business_search';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };

    this.switchDisplay = this.switchDisplay.bind(this);
    this.closeDisplay = this.closeDisplay.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
  }

  redirectToSearch(event) {
    this.props.history.push(`/search?businesses=${event.currentTarget.dataset.business}&location=San%20Francisco,%20CA`)
  }

  switchDisplay(event) {
    event.preventDefault();
    if (this.state.shown === false) {
      this.setState({ shown: true });
      event.currentTarget.lastElementChild.className = "caret-container";
    }
  }

  closeDisplay(event) {
    const classes = ["caret-container", "profile-dropdown", "cred-drop"];
    if (
      this.state.shown === true &&
      !classes.includes(event.target.parentElement.className)
    ) {
      const dropdown = document.getElementsByClassName("caret-container");
      dropdown[0].className = "caret-container-none";
      this.setState({ shown: false });
    }
  }

  displayLoggedNav() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right-login">
          <div onClick={this.switchDisplay} className="profile-container">
            <i className="fas fa-user-alt"></i>
            <i className="fas fa-caret-down"></i>
            <div className="caret-container-none">
              <i className="fas fa-caret-up"></i>
              <div className="profile-dropdown">
                <div className="cred-drop">
                  <i className="fas fa-user-alt" id="drop"></i>
                  <span className="username-drop">
                    {this.props.user.username}
                  </span>
                </div>
                <span onClick={this.props.logout} className="logout-drop">
                  Log Out
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <span>
            <Link className="login" to="/login">
              Log In
            </Link>
          </span>
          <span>
            <Link className="signup" to="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="top" onClick={this.closeDisplay}>
          <div className="nav">
            <div className="nav-left">
            </div>
            {this.displayLoggedNav()}
            {/* <div className="nav-right">
              <span>
                <Link className="login" to="/login">
                  Log In
                </Link>
              </span>
              <span>
                <Link className="signup" to="/signup">
                  Sign Up
                </Link>
              </span>
            </div> */}
          </div>
          <a href="/" className="logo">
            <img
              height="100"
              width="100"
              className="icon-image"
              src="/static/images/whooplogo.png"
            />
          </a>
          <BusinessSearch isMainPage={true} />
          <div className="top-category">
            <span className="wrench" data-business="homeservices" onClick={this.redirectToSearch}>
              <i className="fas fa-wrench"></i> Plumbers
            </span>
            <span className="utensils" data-business="restaurants" onClick={this.redirectToSearch}>
              <i className="fas fa-utensils"></i> Restaurants
            </span>
            <span className="home-icon" data-business="homeservices" onClick={this.redirectToSearch}>
              <i className="fas fa-home"></i> Home Services
            </span>
            <span className="delivery" data-business="restaurants" onClick={this.redirectToSearch}>
              <i className="fas fa-truck"></i> Delivery
            </span>
          </div>
        </div>
        <div className="middle" onClick={this.closeDisplay}>
          <div className="category">
            <span>Browse Businesses by Category</span>
            <div className="category-top">
              <img
                className="restaurants"
                src="/static/images/restaurants.png"
                data-business="restaurants"
                onClick={this.redirectToSearch}
              />
              <img
                className="shopping"
                src="/static/images/shopping.png"
                data-business="shopping"
                onClick={this.redirectToSearch}
              />
              <img
                className="nightlife"
                src="/static/images/bar.png"
                data-business="nightlife"
                onClick={this.redirectToSearch}
              />
              <img
                className="active"
                src="/static/images/active.png"
                data-business="active"
                onClick={this.redirectToSearch}
              />
            </div>
            <div className="category-bottom">
              <img
                className="spa"
                src="/static/images/spa.png"
                data-business="spabeauty"
                onClick={this.redirectToSearch}
              />
              <img
                className="auto"
                src="/static/images/automotive.png"
                data-business="auto"
                onClick={this.redirectToSearch}
              />
              <img
                className="home"
                src="/static/images/home.png"
                data-business="homeservices"
                onClick={this.redirectToSearch}
              />
              <div 
                className="more"
                src="/static/images/more.png"
                data-business="all"
                onClick={this.redirectToSearch}
              >
                <p>. . .</p>
                <p>Browse all businesses</p>
              </div>
            </div>
          </div>
          <div className="apps">
            <span>Whoop Developers</span>
            <div className="app-images">
              <div className="developers-text">
                <div className="apple">
                  <a href="https://www.thesuhaibkhan.com"><img src="/static/images/suhaibkhan.png" /></a>
                </div>
                <a href="https://www.thesuhaibkhan.com"><p>Suhaib Khan</p></a>
              </div>
              <div className="developers-text">
                <div className="apple">
                  <a href="https://www.cindycwkuo.com"><img height="152" width="130" src="/static/images/cindykuo.png" /></a>
                </div>
                <a href="https://www.cindycwkuo.com"><p>Cindy Kuo</p></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" onClick={this.closeDisplay}>
          <img className="building" src="/static/images/footer.png" />
        </div>
      </div>
    );
  }
};

export default Splash;