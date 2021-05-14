import { runStartup } from '@src/services/startupService'
import express from 'express'

import api from '@src/routes/apiRoute'

const app = express()
app.use('/api', api)

runStartup()
  .then(() => {
    app.listen(8080)
  })
  .catch(err => {
    console.error('Something fatal happened', err)
  })
