import { render, screen } from '@testing-library/vue'
import EventCard from '@/components/EventCard'

const event = {
  id: 1,
  time: '12:00PM',
  date: 'September 29th, 2022',
  title: 'Coaching Little League'
}

describe('EventCard', () => {
  it(`renders the event's data successfully`, async () => {
    const { findByTestId } = render(EventCard, {
      props: {
        event
      }
    })

    const card = await findByTestId('event')
    expect(card).toHaveTextContent('@12:00PM on September 29th, 2022')
    expect(card).toHaveTextContent(event.title)
  })

  it(`handles null handles events without a date or time`, async () => {
    render(EventCard, {
      props: {
        event: {
          ...event,
          time: null,
          date: null
        }
      }
    })

    const card = await screen.findByTestId('event')

    // Checking for the *omission* of text is best done with either
    // a visual regression test (using Percy) or using inline snapshots
    expect(card).not.toHaveTextContent('@')
    expect(card).not.toHaveTextContent('on')
    expect(card).toHaveTextContent(event.title)
  })

  it(`displays the time properly when there is no date`, async () => {
    render(EventCard, {
      props: {
        event: {
          ...event,
          date: null
        }
      }
    })

    expect(await screen.findByText('@12:00PM')).toBeInTheDocument()
  })

  it(`displays the date properly when there is no time`, async () => {
    render(EventCard, {
      props: {
        event: {
          ...event,
          time: null
        }
      }
    })

    expect(await screen.findByText('on September 29th, 2022')).toBeInTheDocument()
  })
})
