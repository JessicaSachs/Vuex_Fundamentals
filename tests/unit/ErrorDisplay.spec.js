import ErrorDisplay from '@/views/ErrorDisplay.vue'
import { screen, render } from '@testing-library/vue'

describe('ErrorDisplay', () => {
  it('has a header', async () => {
    render(ErrorDisplay)

    const heading = await screen.findByRole('heading', { name: /Error/i })
    expect(heading).toBeInTheDocument()

    expect(
      await screen.findByText('Oops! There was an error:')
    ).toBeInTheDocument()
  })

  it('displays an error if it exists', async () => {
    const error = new Error('Too many events!')

    render(ErrorDisplay, { props: { error } })
    expect(await screen.findByText(error)).toBeInTheDocument()
  })
})
