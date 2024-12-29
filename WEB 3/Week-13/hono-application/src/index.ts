// pending code !!! Continue Letter

import { Hono } from 'hono'

const app = new Hono()

app.get('/', (res) => {
  return res.json({
    msg:"Hi there"
  })
})

export default app
