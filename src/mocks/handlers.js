// src/mocks/handlers.js
import { rest } from 'msw'
import { events } from '../../db.json'

export const handlers = [
  // Handles the GET /events request
  rest.get('*/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(events))
  })
]
