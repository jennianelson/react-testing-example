import React from 'react'
import { render } from 'react-testing-library'
import { FavoriteNumber } from '../components/favorite-number'

// no longer need 'dom-testing-library' or 'react-dom' bc built into react-testing-library
// import { getQueriesForElement } from 'dom-testing-library'
// import ReactDOM from 'react-dom'

// this is the function that react-testing-library uses for its render method
// it allows me to get whatever I need from dom-testing-library queries
// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {
//     container,
//     ...queries,
//   }
// }

test('renders a number input with a label "Favorite Number"', () => {
  // get whatever I want from the queries from dom-testing-library
  const { getByLabelText } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

// test('renders a number input with a label "Favorite Number"', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<FavoriteNumber />, div)
//   const { getByLabelText } = getQueriesForElement(div)
//   // const input = queries.getByLabelText(div, 'Favorite Number')
//   //use regex so that case does not matter
//   const input = getByLabelText(/favorite number/i)
//   expect(input).toHaveAttribute('type', 'number')
// })
