import React, { Component } from "react";
import styleDataBinding from "./DataBinding.module.css";

// Class Component
export default class DataBinding extends Component {
  sinhVien = {
    id: 1,
    ten: "Nguyen Hoan",
  };

  renderSinhVien = () => {
    //
    return (
      <div>
        id: {this.sinhVien.id}-ten : {this.sinhVien.ten}
      </div>
    );
  };

  render() {
    //phương thức
    let title = "hello cybers";
    let sanPham = {
      ten: "Iphone 5s",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    };

    return (
      <div>
        <p className={`text-center ${styleDataBinding.textGreen}`}>abc</p>

        {this.renderSinhVien()}
        <h1>Họ tên: {this.sinhVien.ten}</h1>
        <p id="title">{title}</p>
        <div className="card text-white bg-primary w-25">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className={`card-text ${styleDataBinding["txt-light"]}`}>{sanPham.gia} </p>
          </div>
        </div>
      </div>
    );
  }
}
