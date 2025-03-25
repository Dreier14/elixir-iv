import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";

export const sendMail = (req: Request, res: Response, next: NextFunction) => {
    const { NODE_MAILER_EMAIL, NODE_MAILER_PASS } = process.env;
    const { name, email, message, service, phoneNumber } = req.body;
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

    const messageData: Record<string, string | undefined> = {
        from: req.body.email,
        to: NODE_MAILER_EMAIL,
        subject: "New IV Treatment Inquiry",
        text: `
    To Elixir IV,

    My name is ${name}, and I am interested in the ${service} service.

    Please contact me at ${email} or ${phoneNumber} to discuss further details.

    ${message}

    Thanks,
    ${name}
        `,
    };
    

    transporter.sendMail(messageData, () => {
        try {
            res.status(200).json({ name: name, text: message, email: email, service: service, phoneNumber: phoneNumber });
        } catch (error: unknown) {
            console.error(
                error,
                "There was an error sending an email to the server."
            );
        }
    });
};
