import { runStartup } from './services/startupService'
import express from 'express'
import path from 'path'

import api from './routes/apiRoute'
import index from './routes/indexRoute'

const app = express()
app.use('/api', api)
app.use('/', index)
app.use(express.static(path.join(process.cwd(), '/dist/frontend')))

runStartup()
  .then(() => {
    app.listen(process.env.PORT ?? 8080)
  })
  .catch(err => {
    console.error('Something fatal happened', err)
  })
