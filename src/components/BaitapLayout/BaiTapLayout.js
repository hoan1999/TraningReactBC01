import React, { Component } from "react";
import BTcarosel from "./BTcarosel";
import BTfooter from "./BTfooter";
import BTHeader from "./BTHeader";
import BTlaptoplist from "./BTlaptoplist";
import BTsmartPhonelist from "./BTsmartPhonelist";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTcarosel />
        <BTfooter />
        <BTsmartPhonelist />
        <BTlaptoplist />
        <BTfooter />
      </div>
    );
  }
}
