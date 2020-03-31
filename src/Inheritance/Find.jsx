import React, { Component } from "react";

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
        <input type="file" onChange={this.showFile} />
        <div
          id="show-text"
          style={{
            border: "solid",
            width: "600px",
            height: "400px",
            marginLeft: "450px",
            marginTop: "20px"
          }}
        >
          Choose text File
        </div>

        <button id="countInh" onClick={this.textCount}>
          Count the direct INH
        </button>
        <br />
        <div className="mark">
          Number of Inheritances counted in the code: <span id="numb"></span>
        </div>
      </div>
    );
  }
}

export default Text;
