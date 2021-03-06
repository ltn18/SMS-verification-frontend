# SMS Verification Frontend
## Frontend's Structure
```
├── public
│   ├── active_numbers_twilio_PNG
│   ├── texts_sent.jpg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
|   ├── robots.txt
│   └── manifest.json
├── src
│   ├── App.js
│   ├── App.css
│   ├── App.text.js
│   ├── axios.js
│   ├── firebase.js
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── yarn.lock
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```
## How to run
### Run in terminal: 
- Clone the repository: `git clone git@github.com:ltn18/SMS-verification-frontend.git`
- Install node_modules/necessary packages: `npm i`
### Setting up .env file
- Create a .env file of the structure down below: 
```
# server config
PORT=3000
HOST=localhost
HOST_URL=http://localhost:3000
BACKEND_API_DOMAIN=http://localhost:8080

# firebase db config
API_KEY=
AUTH_DOMAIN=
DATABASE_URL=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
MEASUREMENT_ID=
```
### Run Frontend
- To start the frontend, run in your terminal: `npm start`
- Your frontend will be running on: `http://localhost:3000`
## Testing
- Since we can only send messages from Twilio to verified users, I will test all the method with my phone number only. You may have to verify your phone number to effectively test.
### Demo Video and Pictures
- You can see the demo here: [sms-verification-with-twilio](https://drive.google.com/file/d/1rngYZDyGQx3ZAh40kQFis6a1fuJLE6BO/view?usp=sharing)
- I registerd the number `(628) 250-4308` on Twilio to send to myself the texts. 
- Here is the picture of the texts that is sent to me: ![texts_sent](public/texts_sent.jpg)
- Here is the picture of my Active Number on Twilio: ![active_numbers_twilio](public/active_numbers_twilio.PNG)

