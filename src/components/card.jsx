import React from "react";
import "../styles/main.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-unix text-white p-5">
          <h3 className="text-center">{this.props.header}</h3>
        </div>
        <div className="card-body">
          <p>{this.props.body}</p>
        </div>
        <div className="card-footer d-flex justify-content-center bg-unix">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
            id="#thumbsDown"
          >
            <i
              className="bi bi-emoji-heart-eyes-fill"
            ></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
