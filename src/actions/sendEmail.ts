"use server";

import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

export const sendEmail = async (formData: { email: string, message: string, topic: string, firstname: string, location: string, village: string, region: string, postal: string, phone: string, picture?: File | string; }) => {
    const email = formData.email;
    const message = formData.message;
    const topic = formData.topic;
    const firstname = formData.firstname;
    const location = formData.location;
    const village = formData.village;
    const region = formData.region;
    const postal = formData.postal;
    const phone = formData.phone;
    const picture = formData.picture;
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!message || typeof message !== "string") {
        return {
            error: "Invalid message",
        }
    }

    if (picture && picture instanceof File) {
        const reader = new FileReader();
        reader.readAsDataURL(picture);
        reader.onload = async () => {
            const dataURL = reader.result as string; // Der Inhalt der Datei als Data-URL
            const attachment = {
                filename: picture.name,
                content: dataURL.split(',')[1], // Die Daten als Base64-kodierten String extrahieren
                encoding: 'base64'
            };
            await resend.emails.send({
                from: 'info@woltu-energy.com',
                to: 'henrickgruhn@web.de',
                subject: 'Woltu Energy',
                reply_to: email,
                react: EmailTemplate({ firstname, message, topic, email, location, village, region, postal, phone }) as React.ReactElement,
                attachments: [attachment],
            });
        };
    } else {
        await resend.emails.send({
            from: 'info@woltu-energy.com',
            to: 'henrickgruhn@web.de',
            subject: 'Woltu Energy',
            reply_to: email,
            react: EmailTemplate({ firstname, message, topic, email, location, village, region, postal, phone }) as React.ReactElement,
        });
    }


        // Wenn alles erfolgreich ist, kannst du eine Bestätigung zurückgeben
        return {
            success: true
        };
    }
