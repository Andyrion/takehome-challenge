import React, { Component } from "react";
import CardProduct from "./CardProduct";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  getUsersApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          Users: res
        });
      })
      .catch((error) => alert("Error " + error));
  };

  componentDidMount() {
    this.getUsersApi();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.Users.map((User) => {
            return (
              <div className="col-lg-3" key={User.id}>
                <CardProduct data={User} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
