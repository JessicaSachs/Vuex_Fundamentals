import { server } from '../../src/mocks/server'

beforeEach(() => server.listen(3000))

afterEach(() => server.resetHandlers())
afterAll(() => server.close())
