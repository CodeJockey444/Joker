import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Grid from "./Grid";
import joy from "./joy.svg";
import fun from "./fun.svg";
import Normal from "./Deck";

class Banner extends React.Component {
  state = {
    jokes: [],
    normalJokes: [],
    ProgrammerJokes: [],
    isNormalJokeRequired: false,
    isEmpty: true,
  };
  getJokes = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_ten", {
        timeout: 10000,
      })
      .then((response) => {
        this.setState({
          normalJokes: response.data,
          isNormalJokeRequired: true,
          isEmpty: false,
        });
        console.log(this.state.normalJokes);
      })
      .catch((err) => console.error(err));
  };
  getProgrammerJokes = () => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/programming/ten", {
        timeout: 5000,
      })
      .then((res) => {
        this.setState({
          ProgrammerJokes: res.data,
          isNormalJokeRequired: false,
          isEmpty: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setData = () => {
    let data = this.state.isNormalJokeRequired
      ? this.state.normalJokes
      : this.state.ProgrammerJokes;
    return data;
  };

  render() {
    return (
      <div id="#main-container">
        <div className="bg-unix p-2 container-fluid">
          <Navbar id={"main-container"} />

          <Grid
            src={joy}
            mess={"Welcome to Joker"}
            sub={`Inspiring a beautiful smile`}
            btnName={"Continue"}
            nav="#readjokes"
          />
        </div>

        <div className="container-fluid m-5 p-5">
          <h1>Relax and Chill...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facilis officia commodi iusto, ullam obcaecati consectetur animi id.
            Quod itaque sequi, id ex obcaecati eveniet officiis eaque iure ut
            veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facilis officia commodi iusto, ullam obcaecati consectetur animi id.
            Quod itaque sequi, id ex obcaecati eveniet officiis eaque iure ut
            veniam.
          </p>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <button
                className="btn m-2 btn-unix mx-auto"
                onClick={this.getJokes}
              >
                Read Normal Jokes
              </button>
            </div>
            <div className="col-sm-12 col-lg-6">
              <button
                className="btn m-2 btn-unix mx-auto"
                onClick={this.getProgrammerJokes}
              >
                Read Programmer Jokes
              </button>
            </div>
          </div>
        </div>
        <div className="card-deck m-5">
          <Normal data={this.setData()} />
        </div>
        <div className="container-fluid  bg-unix p-5" id="readjokes">
          <Grid
            src={fun}
            mess={"Our Mission"}
            sub={"Your happiness and ... smile"}
            btnName={`I'll give you a heart`}
            nav="#navbar"
          />
        </div>
        <div className="container-fluid bg-dark text-white p-5 mt-4">
          <h6 className="text-secondary text-center">
            &copy; All rights reserved.
            <a href="/">View License</a>
          </h6>
        </div>
      </div>
    );
  }
}

export default Banner;
