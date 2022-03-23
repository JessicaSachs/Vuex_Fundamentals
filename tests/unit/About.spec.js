import About from '@/views/About.vue'
import { render, screen } from '@testing-library/vue'

describe('About', () => {
  beforeEach(() => {
    render(About)
  })

  it('renders a header', async () => {
    const header = await screen.findByRole('heading', 'About')
    expect(header).toBeInTheDocument()
  })

  it(`renders the site's description`, async () => {
    const siteDescription = await screen.findByText('A site for events to better the world.')
    expect(siteDescription).toBeInTheDocument()
  })
})