import emailjs from "@emailjs/browser";

interface EmailParams {
    name: string;
    email:string;
    service:string
    message:string;
}


export const sendEmail = async (
    templateID: string,
    params: EmailParams
): Promise<boolean> => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";


    try {
        const formattedParams: Record<string, string> = Object.fromEntries(
            Object.entries(params)
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => [key, String(value)])
        );

        const res = await emailjs.send(serviceID, templateID, formattedParams, userID);

        if (res.status === 200) {
            return true;
        }
    } catch (error) {
        console.error("EmailJS Error:", error);
    }
    return false;
};

export const sendContactEmail = async (
    name:string,
    email:string,
    service: string,
    message: string,
) => {
    return sendEmail(import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        name,
        email,
        service,
        message
    });
};

