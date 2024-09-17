import React from 'react'

const ArrayOfNumber = ({ numbers }) => {
  const findDivisibleBy3 = (numbers) => {
    const values = numbers.filter((num) => num % 3 === 0)

    const ans = JSON.stringify(values)
    return ans

  }

  return (
    <div>Numbers that are divisible by 3 : {findDivisibleBy3(numbers)}</div>
  )
}

export default ArrayOfNumber
