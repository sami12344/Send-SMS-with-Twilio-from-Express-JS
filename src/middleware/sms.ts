// middleware/twilioMiddleware.ts
import { Request, Response, NextFunction } from 'express'
import twilio from 'twilio'
import * as dotenv from 'dotenv';


dotenv.config()

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !twilioPhoneNumber) {
  console.log(
    'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER must be set in .env file.'
  )
}

// Create a Twilio client
const client = twilio(accountSid, authToken)

// Twilio middleware function
export function twilioMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

 const {phone} = req.body
  // Custom logic to decide when to send an SMS
  const shouldSendSMS = true // Replace this with your own condition

  if (shouldSendSMS) {
    const phoneNumber = phone// Replace with the recipient's phone number
    const message = 'Hello from Twilio middleware!'

    // Send SMS using Twilio
    client.messages
      .create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber,
      })
      .then((message) => {
        console.log(`SMS sent with SID: ${message.sid}`)
        next()
      })
      .catch((error) => {
        console.error(`Error sending SMS: ${error.message}`)
        next()
      })
  } else {
    // If you don't want to send an SMS, just proceed to the next middleware
    next()
  }
}
