import React, { Component } from "react";
import "./Find.css";

class Text extends Component {
  constructor(props) {
    super(props);
  }

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const preview = document.getElementById("show-text");
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      const textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function(event) {
          let tempory = (preview.innerHTML = event.target.result);

          document.querySelector("#countInh").addEventListener("click", () => {
            document.querySelector("#numb").textContent = (
              tempory.match(/extends/g) || []
            ).length;
          });
        };
      } else {
        preview.innerHTML =
          "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            border: "solid",
            width: "1520px",
            alignContent: "center",
            marginLeft: "5px",
            marginTop: "5px",
            backgroundColor: "#2d545e",
            color: "#feb300"
          }}
        >
          <h1>CALCULATE INHERITANCE</h1>
        </div>

        <input
          type="file"
          style={{
            marginTop: "20px",
            marginLeft: "-1000PX"
          }}
          onChange={this.showFile}
        />
        <br></br>
        <div
          style={{
            marginTop: "10px"
          }}
        >
          <div
            id="show-text"
            style={{
              border: "solid #feb300",
              width: "600px",
              height: "400px",
              marginLeft: "100px",
              margintop: "30px",
              paddingTop: "10px",
              backgroundColor: "#FFFFFF"
            }}
          >
            Choose text File
          </div>
        </div>
        <br></br>
        <div
          style={{
            marginTop: "-15px"
          }}
        >
          <button
            style={{
              paddingBlock: "10px",
              marginLeft: "-1100px",
              textAlign: "center",
              backgroundColor: "#2d545e",
              color: "#feb300"
            }}
            id="countInh"
            onClick={this.textCount}
          >
            Count the direct INH
          </button>
        </div>

        <br />
        {/* <div className="mark">
          Number of Inheritances counted in the code: <span id=""></span>
        </div> */}

        <div
          className="inhTable"
          style={{
            marginLeft: "770px",
            marginTop: "-500px",
            border: "solid #c7af6b",
            borderBlockEndWidth: "10px",
            borderBlockWidth: "20px",
            width: "700px",
            height: "400px",
            backgroundColor: "#2d545e"
          }}
        >
          <table className="table">
            <tr>
              <th>Count</th>
              <th>Class Name </th>
              <th>No. Direct Inheritance</th>
              <th>No. Indirect Inheritance</th>
              <th>No. Total Inheritance</th>
              <th>CI</th>
            </tr>
            <tr>1</tr>
            <tr>2</tr>
            <tr>3</tr>
            <tr>4</tr>
            <tr>5</tr>
            <tr>6</tr>
            <tr>7</tr>
            <tr>8</tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="mark">
                  Number of Total Inheritances :<span id="numb">[ ]</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            border: "solid",
            width: "1520px",
            alignContent: "center",
            marginLeft: "5px",
            marginTop: "90px",
            backgroundColor: "#2d545e",
            color: "#feb300"
          }}
        >
          <h1>Project by SLIIT.</h1>
        </div>
      </div>
    );
  }
}

export default Text;
