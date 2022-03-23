import App from '@/App.vue'
import { fireEvent, screen, render, within } from '@testing-library/vue'
import router from '@/router'
import { createStore } from '@/store'

describe('App', () => {
  beforeEach(() => {
    render(App, {
      global: {
        plugins: [createStore(), router]
      }
    })
  })

  it('renders a nav bar', async () => {
    const nav = await screen.findByRole('navigation')
    const links = await within(nav).findAllByRole('link')
    expect(links).toHaveLength(3)
    expect(await screen.findByRole('link', { name: 'Events' })).toHaveAttribute(
      'href',
      '/'
    )
    expect(await screen.findByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about'
    )
    expect(
      await screen.findByRole('link', { name: 'Create Event' })
    ).toHaveAttribute('href', '/event/create')
  })

  it('renders the EventList route by default', async () => {
    expect(
      await screen.findByRole('heading', { name: /Events/ })
    ).toBeInTheDocument()
  })

  it('shows the about page when you click on the nav link', async () => {
    const aboutLink = await screen.findByRole('link', { name: 'About' })
    fireEvent.click(aboutLink)
    expect(
      await screen.findByRole('heading', { name: /About/ })
    ).toBeInTheDocument()
  })

  it('shows the create event page when you click on the nav link', async () => {
    const createEventLink = await screen.findByRole('link', { name: 'Create Event' })
    fireEvent.click(createEventLink)
    expect(
      await screen.findByRole('heading', { name: /Create an event/i })
    ).toBeInTheDocument()
  })
})
