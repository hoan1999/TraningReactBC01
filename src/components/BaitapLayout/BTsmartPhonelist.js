import React, { Component } from "react";
import BTitems from "./BTitems";

export default class BTsmartPhonelist extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-black text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-3">
              <BTitems />
            </div>
            <div className="col-3">
              <BTitems />
            </div>
            <div className="col-3">
              <BTitems />
            </div>

            <div className="col-3">
              <BTitems />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
