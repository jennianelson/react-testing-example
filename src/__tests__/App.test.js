import React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

it('renders Login', () => {
  const { getByText } = render(<App />)
  expect(getByText('Login')).toBeInTheDocument()
})
