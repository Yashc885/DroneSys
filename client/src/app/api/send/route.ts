import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(request) {
  mail.setApiKey(process.env.KEY_SENDGRID);
  let response = {};
  const body = await request.json();
  const message = body.message;
  const firstname = body.firstname;
  const name = body.name;
  const email = body.email;
  const content = {
    to: process.env.EMAIL_TO,
    from: process.env.FROM_EMAIL,
    templateId: process.env.TEMPLATE_ID,
    dynamic_template_data: {
      firstname: firstname,
      name: name,
      email: email,
      message: message,
    },
  };
  await mail
    .send(content)
    .then(() => {
      response = {
        status: "success",
        message: "Message sent",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });
  return NextResponse.json(response);
}