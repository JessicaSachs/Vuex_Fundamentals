import EventCreate from '@/views/EventCreate.vue'
import { render, screen } from '@testing-library/vue'
import { createStore } from '@/store'
import router from '@/router'
import { eventCategories } from '../../src/constants'

describe('EventCreate', () => {
  beforeEach(() => {
    render(EventCreate, {
      global: {
        plugins: [createStore(), router]
      }
    })
  })

  describe('form', () => {
    it('has a form', async () => {
      const form = await screen.findByRole('form')
      expect(form).toBeInTheDocument()
    })

    it('has sections', async () => {
      await screen.findByRole('heading', { name: 'Name & describe your event' })
      await screen.findByRole('heading', { name: 'Where is your event?' })
      await screen.findByRole('heading', { name: 'When is your event?' })
    })

    it('has multiple categories', async () => {
      // Assert that a number of options are available in the select
      expect(await screen.findAllByRole('option')).toHaveLength(eventCategories.length)
      for (const category of eventCategories) {
        const option = await screen.findByRole('option', { name: category })
        expect(option).toBeInTheDocument()
      }
    })

    it('has a title', async () => {
      const title = await screen.findByRole('textbox', { name: 'Title' })
      expect(title).toBeInTheDocument()
      expect(title).toHaveAttribute('placeholder', 'Title')
      expect(title).toHaveAttribute('type', 'text')
    })

    it('has a description', async () => {
      const description = await screen.findByRole('textbox', { name: 'Description' })
      expect(description).toBeInTheDocument()
      expect(description).toHaveAttribute('placeholder', 'Description')
      expect(description).toHaveAttribute('type', 'text')
    })

    it('has a date', async () => {
      const date = await screen.findByRole('textbox', { name: 'Date' })
      expect(date).toBeInTheDocument()
      expect(date).toHaveAttribute('placeholder', 'Date')
      expect(date).toHaveAttribute('type', 'text')
    })

    it('has a time', async () => {
      const time = await screen.findByRole('textbox', { name: 'Time' })
      expect(time).toBeInTheDocument()
      expect(time).toHaveAttribute('placeholder', 'Time')
      expect(time).toHaveAttribute('type', 'text')
    })

    it('has a location', async () => {
      const location = await screen.findByRole('textbox', { name: 'Location' })
      expect(location).toBeInTheDocument()
      expect(location).toHaveAttribute('placeholder', 'Location')
      expect(location).toHaveAttribute('type', 'text')
    })

    it('has a submit button', async () => {
      const submitButton = await screen.findByRole('button', { name: 'Submit' })
      expect(submitButton).toBeInTheDocument()
    })
  })

  describe('submit', () => {
    it('none of the fields are required', () => {})
    it('prevents the default submit behavior', () => {})
    it('correctly passes through all filled out fields', () => {})
    it('displays the standard error view if there is a network failure', () => {})
    it('displays the event detail view if the event is successfully submitted', () => {})
    it('displays the *correct* event detail view if the event is successfully submitted', () => {})
    it('creates an internal id when submitted', () => {})
    it('submits the correct organizer when creating a new event', () => {
      // The organizer field is only submitted to the backend and used for bookkeeping -- not displayed in the UI.
    })
  })
})
