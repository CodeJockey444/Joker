import React from "react";
import "../styles/main.css";

class Navbar extends React.Component {
  state = { likes: 0 };
  handleDarkMode = (e) => {
    e.preventDefault()
  };
  handleLikeIncrement = (e) => {
    e.preventDefault();
    let currentLikes = this.state.likes;
    this.setState({ likes: (currentLikes += 1) });
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light justify-content-end p-3"
        id="navbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="/"
              data-toggle="tool-tip"
              title="I love this"
              onClick={this.handleLikeIncrement}
            >
              <i className="bi bi-heart-fill">
                <span className="badge badge-pill badge-danger">
                  {this.state.likes}
                </span>
              </i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              data-toggle="tool-tip"
              title="Dark mode"
              id="dark-mode"
              onClick={this.handleDarkMode}
            >
              <i className="bi bi-cloud-moon-fill"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/15Dkatz/official_joke_api"
              target="_blank"
              rel="noreferrer"
              data-toggle="tool-tip"
              title="View github source"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
