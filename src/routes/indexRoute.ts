import path from 'path'
import express from 'express'
const router = express.Router()

// serves the index.html page on default path
router.get('/', function (req, res) {
  console.log(path.join(process.cwd(), '/dist/frontend/index.html'))
  res.sendFile(path.join(process.cwd(), '/dist/frontend/index.html'))
})

export default router
