import React, { Component } from "react";
export default class CardProduct extends Component {
  showCompany =() =>{
    alert(this.props.data.company.name);
  };
  
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="user-name">{this.props.data.name}</h5>
          <p className="user-email">{this.props.data.email}</p>
          <button onClick={this.showCompany} className="btn btn-secondary btn-sm">Show more</button>
        </div>
      </div>
    );
  }
}
