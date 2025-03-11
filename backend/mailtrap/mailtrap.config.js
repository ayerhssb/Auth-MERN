import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});


export const sender = {
	email: "hello@demomailtrap.co",
	name: "Shreya",
};


// const { MailtrapClient } = require("mailtrap");

// const TOKEN = "";

// const client = new MailtrapClient({
//   token: TOKEN,
// });

// const sender = {
//   email: "hello@demomailtrap.co",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "ayerhssb1@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);