import { runStartup } from './services/startupService'
import express from 'express'

import api from './routes/apiRoute'

const app = express()
app.use('/api', api)

runStartup()
  .then(() => {
    app.listen(8080)
  })
  .catch(err => {
    console.error('Something fatal happened', err)
  })
