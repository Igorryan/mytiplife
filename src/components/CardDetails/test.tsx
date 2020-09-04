import { render, screen } from '@testing-library/react'

import CardDetails from '.'

describe('<CardDetails />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardDetails />)

    expect(
      screen.getByRole('heading', { name: /CardDetails/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
