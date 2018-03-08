import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return (
          <div>
            <li>
              <a href="/auth/google">Log in with google!</a>
            </li>
          </div>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Log out!</a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(Header);
