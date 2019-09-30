/* eslint no-eval: 0 */
import React, { Component } from "react";
import Button from "./button";
import Display from "./display";
import calculate from "./calculate";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    };
  }

  //convert the number of button clicked  to a string
  displayElement = e => {
    this.setState({ display: calculate(this.state.display, e) });
  };
  //method to convert to an integer and then calculate

  render() {
    const style = {
      borderRadius: 0,
      backgroundColor: "#c8dbe5",
      width: "50px",
      height: "50px",
      outline: 0,
      margin: 0,
      padding: 0,
      border: 0
    };
    return (
      <div className="container" id="container">
        <table>
          <tr>
            <Display number={this.state.display} className="display" />
          </tr>
          <tr>
            <td>
              <Button
                value="7"
                handleClick={this.displayElement}
                //style={style}
                className="btn"
              />
            </td>
            <td>
              <Button
                value="8"
                handleClick={this.displayElement}
                className="btn"
                //style={style}
              />
            </td>
            <td>
              <Button
                value="9"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="+"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="←"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                value="4"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="5"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="6"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="-"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="C"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                value="1"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="2"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="3"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="/"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td rowspan="2">
              <Button
                id="equal"
                value="="
                handleClick={this.displayElement}
                className="btn"
                //style={style}
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <Button
                value="0"
                id="zero"
                handleClick={this.displayElement}
                className="btn"
              />
            </td>
            <td>
              <Button
                value="."
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
            <td>
              <Button
                value="*"
                handleClick={this.displayElement}
                className="btn"
                style={style}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
