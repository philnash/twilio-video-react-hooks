# Twilio Video chat with React Hooks

This is an example video chat application built with [Twilio Video](https://www.twilio.com/docs/video) and React, using Hooks.

Learn how to build this entire application in the blog post [Build a Twilio Video Chat with React Hooks](https://www.twilio.com/blog/video-chat-react-hooks).

## Preparing the application

To run the application you will need a [Twilio account](https://www.twilio.com/try-twilio) and Node.js and npm installed. Start by cloning or downloading the repo to your machine.

```bash
git clone https://github.com/philnash/twilio-video-react-hooks.git
cd twilio-video-react-hooks
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file by copying the `.env.example`.

```bash
cp .env.example .env
```

### Credentials

You will need your Twilio Account SID, available in your [Twilio console](https://www.twilio.com/console). Add it to the `.env` file.

You will also need an API key and secret, you can create these under the [Programmable Video Tools in your console](https://www.twilio.com/console/video/project/api-keys). Create a key pair and add them to the `.env` file too.

## Running the application

Once you have completed the above you can run the application with:

```bash
npm run dev
```

This will open in your browser at [localhost:3000](http://localhost:3000).