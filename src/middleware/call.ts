// twilioMiddleware.ts
import * as dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import twilio from 'twilio'
dotenv.config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

const client = twilio(accountSid, authToken)

// Define an interface to extend the Request interface
interface CustomRequest extends Request {
  recipientPhoneNumber?: string
  callSid?: string
}

// Middleware function to make the call
async function makeCallMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const recipientPhoneNumber = req.recipientPhoneNumber

  // Check if recipientPhoneNumber exists and is a valid string
  if (!recipientPhoneNumber || typeof recipientPhoneNumber !== 'string') {
    return res.status(400).send('Invalid recipient phone number.')
  }

  // Check if twilioPhoneNumber exists and is a valid string
  if (!twilioPhoneNumber || typeof twilioPhoneNumber !== 'string') {
    return res.status(500).send('Twilio phone number not configured.')
  }

  try {
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml', // Replace this with the URL of your TwiML endpoint
      to: recipientPhoneNumber,
      from: twilioPhoneNumber,
    })

    req.callSid = call.sid
    next()
  } catch (error) {
    console.error('Error making call:', error)
    next(error)
  }
}

export default makeCallMiddleware
