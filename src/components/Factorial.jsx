import React from 'react'

const Factorial = (props) => {
  const calculateFactorial = (num) => {
    if (num < 0) {
      return "Invalid input"
    }
    if (num === 0 || num === 1) {
      return 1
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++){
      factorial *= i
    }
    return factorial;
  }


  return (
    <div>Factorial of {props.number} is : {calculateFactorial(props.number) }</div>
  )
}

export default Factorial