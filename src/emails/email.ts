import emailjs from "emailjs-com"
import { UserDataForm } from "../types";

const sendEmail = async (data: UserDataForm) => {

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceID || !templateID || !publicKey) {
        console.error("Error")
        return
    }

    return emailjs.send(
        serviceID,
        templateID,
        {
            title: "PORTFOLIO MK",
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            time: new Date().toLocaleString(),
            message: data.message,
        },
        publicKey
    )
};

export default sendEmail