// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles the GET /events request
  rest.get('*/events', (req, res, ctx) => {
    const data = { message: 'Hello from Vue Mastery!' }
    return res(ctx.status(200), ctx.json(data))
  })
]
