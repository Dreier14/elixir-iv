import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";

export const sendMail = (req: Request, res: Response, next: NextFunction) => {
    const { NODE_MAILER_EMAIL, NODE_MAILER_PASS } = process.env;
    const { firstName, lastName, email, message, service, phoneNumber } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: NODE_MAILER_EMAIL,
            pass: NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "") {
        return res.status(400).json({ error: "Please fill out all fields." });
    }

    console.log(`Sending email to Elixir IV from ${firstName} ${lastName}, with email: ${email}, phone number: ${phoneNumber}`);

    const messageData: Record<string, string | undefined> = {
        replyTo: email,
        to: NODE_MAILER_EMAIL,
        subject: "New IV Treatment Inquiry",
        text: `
    To Elixir IV,

    My name is ${firstName} ${lastName}, and I am interested in ${service ? "the " + service + " service" : "learning about more therapies"}.

    Please contact me at ${email} or ${phoneNumber} to discuss further details.

    ${message}

    Thanks,
    ${firstName} ${lastName}
        `,
    };
    

    transporter.sendMail(messageData, () => {
        try {
            res.status(200).json({ firstName: firstName, lastName: lastName, text: message, email: email, service: service, phoneNumber: phoneNumber });
        } catch (error: unknown) {
            console.error(
                error,
                "There was an error sending an email to the server."
            );
        }
    });
};
