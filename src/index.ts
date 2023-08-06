// src/app.ts
import express, { NextFunction, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { twilioMiddleware } from './middleware/sms'
import makeCallMiddleware from './middleware/call'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Add the Twilio middleware to a specific route
app.post('/sms', twilioMiddleware, (req: Request, res: Response) => {
  res.send(`SMS is Sent ${req.body.phone}`)
})
// Define an interface to extend the Request interface
interface CustomRequest extends Request {
  recipientPhoneNumber?: string;
  callSid?: string;
}
app.post(
  '/get/call',
  (req: CustomRequest, res: Response, next: NextFunction) => {
    const recipientPhoneNumber = req.body.phone
    if (!recipientPhoneNumber) {
      return res.status(400).send('Recipient phone number is required.')
    }

    req.recipientPhoneNumber = recipientPhoneNumber
    next()
  },
  makeCallMiddleware,
  (req: CustomRequest, res: Response) => {
    // The Twilio call has been made, and the call SID is available in req.callSid
    res.send('Call SID: ' + req.callSid)
  }
)


app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello from Express with Twilio middleware! To get message post "phone" in json in route phone'
  )
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
