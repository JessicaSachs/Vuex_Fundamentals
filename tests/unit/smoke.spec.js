import axios from 'axios'

it('works', async () => {
  const response = await axios.get('/events')

  console.log(response.data)

  expect(true).toBeTruthy()
})