import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'match-media-mock'
import { PageGame } from './pageGame'
import { setupJestCanvasMock } from 'jest-canvas-mock'
import 'web-audio-mock'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('PageGame component', () => {
  beforeEach(() => {
    window.matchMedia = create()

    jest.resetAllMocks()
    setupJestCanvasMock()
  })

  it('Компонент рендерится', () => {
    const { container } = render(
      <BrowserRouter>
        <PageGame />
      </BrowserRouter>
    )

    expect(container).toBeInTheDocument()
  })
})
