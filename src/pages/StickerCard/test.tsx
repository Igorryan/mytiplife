import { render, screen } from '@testing-library/react'

import StickerCard from '.'

describe('<StickerCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<StickerCard />)

    expect(
      screen.getByRole('heading', { name: /StickerCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
