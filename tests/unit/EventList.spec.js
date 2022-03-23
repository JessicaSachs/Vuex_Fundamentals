import EventList from '@/views/EventList'
import { render, screen, waitFor } from '@testing-library/vue'
import { createStore } from '@/store'
import router from '@/router'
import { events as mockEvents } from '../../db.json'

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return render(EventList, {
    global: {
      plugins: [createStore(config.plugins.store), router]
    },
    ...config.mountOptions
  })
}

describe('EventList', () => {
  it('should render the events', async () => {
    const { container } = await mountEventList()
    expect(container).toBeInTheDocument()
  })

  describe('page title', () => {
    it('is rendered with the correct text', async () => {
      mountEventList()
      expect(await screen.findByText('Events for Good')).toBeInTheDocument()
    })
  })

  describe('events', () => {
    it('are rendered in a list with necessary information', async () => {
      mountEventList()
      await waitFor(async () => {
        const events = await screen.getAllByTestId('event')
        expect(events).toHaveLength(mockEvents.length)
        for (let i = 0; i < events.length; i++) {
          expect(events[i]).toHaveTextContent(mockEvents[i].title)

          if (mockEvents[i].date) {
            expect(events[i]).toHaveTextContent(mockEvents[i].date)
          }
        }
      })
    })
  })
})
