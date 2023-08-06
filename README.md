<img src="https://github.com/sami12344/Send-SMS-with-Twilio-from-Express-JS/assets/77746252/003cdb17-5479-4d9a-9688-151151be198e" alt="Banner" style="width: 100%;">




<h1 align="center" >Send SMS with Twilio from Express TS</h1> 


This repository contains a simple Express.js application written in TypeScript that demonstrates how to send SMS messages using the Twilio API. Twilio is a cloud communications platform that enables developers to integrate messaging, voice, and video capabilities into their applications.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/send-sms-with-twilio-express-ts.git
cd send-sms-with-twilio-express-ts
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Set up Twilio Credentials:**

Create a `.env` file in the root directory and add your Twilio credentials:

```dotenv
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

Replace `your_twilio_account_sid`, `your_twilio_auth_token`, and `your_twilio_phone_number` with your actual Twilio account credentials and Twilio phone number.

4. **Run the Application:**

```bash
npm start
```

The application will be running at `http://localhost:3000`.

## How It Works

This application demonstrates how to use Twilio to send SMS messages from an Express.js server. The main components of the application are:

- `app.ts`: The entry point of the Express application where middleware, routes, and server setup are defined.
- `middleware/twilioMiddleware.ts`: A custom middleware function that interacts with the Twilio API to send SMS messages. The middleware is applied to a specific route in the application to trigger SMS sending.
- `routes/index.ts`: The main router file that handles incoming requests.

When you visit `http://localhost:3000/` in your web browser or use tools like cURL or Postman to trigger the SMS sending functionality, the application will use Twilio to send an SMS to a recipient phone number with a predefined message.

## Dependencies

This application uses the following dependencies:

- [Express.js](https://expressjs.com/): A popular web application framework for Node.js.
- [Twilio](https://www.twilio.com/): The Twilio Node.js library to interact with the Twilio API.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing to the language for better tooling and maintainability.
- [dotenv](https://www.npmjs.com/package/dotenv): A library to load environment variables from a `.env` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or want to add improvements, feel free to create a pull request.

## Acknowledgments

This project was inspired by the need to demonstrate how to send SMS messages using Twilio in an Express.js application using TypeScript.

## Contact

If you have any questions or feedback, feel free to contact me at samiislam.coder@gmail.com.

Thank you for checking out this repository! Happy coding!
