import { render, screen } from '@testing-library/react'
import App from './app/index'

test('renders learn react link', () => {
  render(<App />)
  console.log()
  const linkElement = screen.getByText(/Discover Digital/i)
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument()
})

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})
