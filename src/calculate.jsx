/*we create a function that takes the state and event of the App component, two strings and returns
a string*/
import math from "mathjs";
function calculate(state, event) {
  // these constant are used when we want to make a condition a group of strings

  const numberNotZero = /[1-9]/;
  const numbers = /[0-9]/;

  const operators = /[-\/\*\+]/;
// 
  //limits of numbers of Display component
  if (state.length >= 13) {
    if (event === "←") return state.substring(0, state.length - 1);
    if (event === "C") return "0";
    return state;
  }

  //conditions when the event is a 0:

  if (event === "0") {
    if (typeof state === "number") return event;

    if (state === "0") return event;
    if (numberNotZero.test(state)) return state + event;
    if (/./.test(state[state.length - 1])) return state + event;
    if (state !== "0") return state + event;
  }

  //conditions when the event is a number that is not zero:
  if (numberNotZero.test(event)) {
    if (typeof state === "number") return event;
    if (state !== "0") {
      return state + event;
    } else {
      return event;
    }
  }
  
  //conditions when the event is a point:
  if (event === ".") {
    if (typeof state === "number") return state.toString() + event;
    if(/\d+\.\d+/.test(state)) {
      if(/\d+\.\d+[\+-\/\*]\d+/.test(state)){
      return state + event;
      }
      return state ; 
    }
    
    if (state === "0") return state + event;
    if (numbers.test(state[state.length - 1])) {
      return state + event;
    } else {
      return state;
    }
 
  }

  //conditions when the event is an operator:
  if (operators.test(event)) {
    if (typeof state === "number") return state + event;
    if (numbers.test(state[state.length - 1])) {
      return state + event;
    } else{
      if(operators.test(state[state.length - 1]) && event !== "-"){
         if(operators.test(state[state.length - 2])){
           return state.slice(0, state.length - 2) + event;
         }
        return state.slice(0, state.length - 1) + event;
      }else if(event === "-"){
        return state + event;
      }
      return state
    }
  }

  //conditions when the event is C:
  if (event === "C") {
    return "0";
  }

  //conditions when the event is an arrow:
  if (event === "←") {
    if (state.length === 1) {
      return "0";
    }
    if (typeof state === "number") {
      const result = state.toString();
      return result.substring(0, result - 1);
    }
    return state.substring(0, state.length - 1);
  }

  //conditions when the event is an operator:
  if (event === "=") {
    const result = math.eval(state);
    if (result.length > 12) {
      return "error";
    } else {
      return result;
    }
  }
}

export default calculate;
