import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Papa from "papaparse";
import "../../styles/CSV.css";
import API from "../../utils/API";
import Store from "../../utils/Store";
import { Link } from "react-router-dom";

class FileReader extends Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined,
      csvfileComercial: undefined
      // productData: []
    };
    this.updateData = this.updateData.bind(this);
    this.updateDataComercial = this.updateDataComercial.bind(this);
  };

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0],
      csvfileComercial: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      delimiter: ",",
      skipEmptyLines: true,
      header: true
    });
  };

  importCSVComercial = () => {
    const { csvfileComercial } = this.state;
    console.log(csvfileComercial);
    Papa.parse(csvfileComercial, {
      complete: this.updateDataComercial,
      delimiter: ",",
      skipEmptyLines: true,
      header: true
    });
  };

  updateData(result) {
    var data = {};
    data.userId = Store.get("userData").user._id;
    console.log(data.userId + " Gratuito");
    data.csv = result.data;
    API.saveCSV({
      data
    }).then(() => {
      this.props.history.push("/userIndex");
    });
  }

  updateDataComercial(res) {
    var data = {};
    data.userId = Store.get("userData").user._id;
    console.log(data.userId + " Gratuito");
    data.csv = res.data;
    API.saveCSVComercial({
      data
    }).then(() => {
      this.props.history.push("/userIndex");
    });

  }


  render() {
    //--------------FETCH FROM STORAGE TYPE OF PLAN------------------------
    const planType = Store.get("userData").user.planType;

    return (
      <div className="containerUI">
        <div className="cardCSV">
          {planType === "free" ? (
            //------------------------FREE CSV CONTAINER-----------------------
            <div className="containerCSV">
              <h2>Import .CSV File!</h2>
              <h4>
                <b>Select your file</b>
              </h4>
              <hr />
              <p>
                Remember that CER+ depends on the reliability of your .CSV to
                work correctly.
              </p>
              <input
                className="csv-input"
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                name="file"
                placeholder={null}
                onChange={this.handleChange}
              />
              <p />
              <button className="CSV-btn" onClick={this.importCSV}>
                {" "}
                Upload now!
              </button>
            </div>
          ) : (
              //------------------------COMERCIAL CSV CONTAINER-----------------------
              <div className="containerCSV">
                <h2>Import .CSV File!</h2>
                <h4>
                  <b>Select your file</b>
                </h4>
                <hr />
                <p>
                  Remember that CER+ depends on the reliability of your .CSV to
                  work correctly
              </p>
                {/*-----------------NORMAL CSV CONTAINER-------------------*/}
                <div className="firstCSV">
                  <p>Submit any .csv file for administration</p>
                  <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                      this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                  />
                  <p />
                  <button className="CSV-btn" onClick={this.importCSV}>
                    {" "}
                    Upload now!
                </button>
                </div>
                <p />
                {/*-------------------PRODUCT CSV CONTAINER------------------*/}
                <div className="productCSV">
                  <p>Submit your .csv product file for administration</p>
                  <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                      this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                  />
                  <p />
                  <button className="CSV-btn" onClick={this.importCSVComercial}>
                    {" "}
                    Upload now!
                </button>
                  <button className="ProductCSV-btn">
                    <Link to="/store">Go to E-Store</Link>
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withRouter(FileReader);
