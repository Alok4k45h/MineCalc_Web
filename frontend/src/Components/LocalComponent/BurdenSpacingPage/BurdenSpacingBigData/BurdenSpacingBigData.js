import React from "react";
import axios from "axios";
//import { Link } from 'react-router-dom';
//import Link from '@mui/material/Link';
import uploadableburdenspacing from "./uploadableburdenspacing.png";
const FileDownload = require("js-file-download");

class BurdenSpacingBigData extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      downloadfile: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDownloadfile = this.handleDownloadfile.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }
  handleDownloadfile(e) {
    this.setState({
      downloadfile: e,
    });
  }

  submit() {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = "upload";

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        //FileDownload(res.data, 'report.xlsx');
        //fs.writeFileSync('stackabuselogoout.xlsx', res.data);
        this.handleDownloadfile(!res.data.downloadfile);
        console.log("continue to download");
        //console.warn(res.data.file.data.data);
      });
  }

  render() {
    const download = (e) => {
      e.preventDefault();
      axios({
        url: "download", //your url
        method: "GET",
        responseType: "blob", // important
      }).then((res) => {
        /*
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf'); //or any other extension

      document.body.appendChild(link);
      link.click();
      */
        console.log(res);
        FileDownload(res.data, "datadown.csv");
      });
    };

    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <br />

            <h3 className="text-white">
              React File Upload Example - Tutsmake.com
            </h3>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="text-white">Select File :</label>
                <input
                  type="file"
                  className="form-control"
                  name="uploadfile"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-6">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={() => this.submit()}
                >
                  Save
                </button>
                {/*}<Link to="C:\Users\DevRaj Win10hm_Vol5\Downloads\NullClass WebDev Brochure.pdf">Download</Link>*/}
                {/*<a href='../../backend/upload/hello.jpeg' download>Click to download</a>*/}
              </div>
            </div>
            <div
              style={{
                margin: "auto",
                display: "table",
              }}
            >
              <h4>Click to download the processed file</h4>
              <button
                disabled={this.state.downloadfile}
                onClick={(e) => download(e)}
              >
                Download It
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "null",
            }}
          >
            <img src={uploadableburdenspacing} />
          </div>
        </div>
      </div>
    );
  }
}

export default BurdenSpacingBigData;
