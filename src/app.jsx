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
    this.displayElement = this.displayElement.bind(this)
  }

  //enter the data to the display and calculate
  displayElement(e) {
    
    this.setState( (state) => {
      
      return { display: calculate(state.display, e) }})
  };
  
  //method to convert to an integer and then calculate

  render() {
    
    return (
      <div className="container" id="container">
       <div className="wrapper" >
        <div className="display-div">
            <Display number={this.state.display} className="display" />
        </div>
        <div className="btn-panel">
              <Button
                id="seven"
                value="7"
                handleClick={this.displayElement}
                
                className="btn"
              />
         
              <Button
                value="8"
                id="eight"
                handleClick={this.displayElement}
                className="btn"
                
              />
           
              <Button
                id="nine"
                value="9"
                handleClick={this.displayElement}
                className="btn"
                
              />
            
              <Button
                id="add"
                value="+"
                handleClick={this.displayElement}
                className="btn"
              
              />
            
              <Button
                id="back"
                value="←"
                handleClick={this.displayElement}
                className="btn"
              
              />
          
              <Button
                id="four"
                value="4"
                handleClick={this.displayElement}
                className="btn"
                
              />
       
              <Button
                id="five"
                value="5"
                handleClick={this.displayElement}
                className="btn"
                
              />
          
              <Button
                id="six"
                value="6"
                handleClick={this.displayElement}
                className="btn"
                
              />
           
              <Button
                id="subtract"
                value="-"
                handleClick={this.displayElement}
                className="btn"
                
              />
          
              <Button
                id="clear"
                value="C"
                handleClick={this.displayElement}
                className="btn"
               
              />
            
              <Button
                id="one"
                value="1"
                handleClick={this.displayElement}
                className="btn"
               
              />
            
              <Button
                id="two"
                value="2"
                handleClick={this.displayElement}
                className="btn"
              
              />
            
              <Button
                id="three"
                value="3"
                handleClick={this.displayElement}
                className="btn"
                
              />
            
              <Button
                id="divide"
                value="/"
                handleClick={this.displayElement}
                className="btn"
               
              />
            
              <Button
                id="equals"
                value="="
                handleClick={this.displayElement}
                className="btn"
                
              />
        
              <Button 
                value="0"
                id="zero"
                handleClick={this.displayElement}
                className="btn"
              />
            
              <Button
                id="decimal"
                value="."
                handleClick={this.displayElement}
                className="btn"
              
              />
            
              <Button
                id="multiply"
                value="*"
                handleClick={this.displayElement}
                className="btn"
               
              />
         </div>
        </div>
      </div>
    );
  }
}

export default App;
