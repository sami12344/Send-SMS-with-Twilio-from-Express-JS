// src/app.ts
import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { twilioMiddleware } from './middleware/twilioMiddleware'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Add the Twilio middleware to a specific route
app.post('/phone', twilioMiddleware, (req: Request, res: Response) => {
  res.send(`SMS is Sent ${req.body.phone}`)
})

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello from Express with Twilio middleware! To get message post "phone" in json in route phone'
  )
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
