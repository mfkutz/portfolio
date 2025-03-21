import { useForm } from "react-hook-form"
import { UserDataForm } from "../types"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import sendEmail from "../emails/email"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { useState } from "react"
import { MoonLoader } from "react-spinners"
import ReCAPTCHA from "react-google-recaptcha"

const siteKey = import.meta.env.VITE_KEY1_RECAPTCHA

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [captchaValue, setCaptchaValue] = useState<string | null>(null)
    const initialValues: UserDataForm = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserDataForm>({ defaultValues: initialValues })

    const handleSend = async (data: UserDataForm) => {

        if (!captchaValue) {
            toast.error("Please complete the reCAPTCHA")
            return
        }

        setLoading(true)

        try {
            await sendEmail(data)
            toast("Email Sent")
            reset()
            setCaptchaValue(null)
        } catch (error) {
            console.error("Error enviando email", error)
            toast("Error sending Email")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='h-screen  text-white flex flex-col items-center relative px-4 '>

            {<div className="text-center mt-[7rem] mb-4 lg:mb-0 lg:hidden">
                <h2 className=" text-gray-600/100 text-[3rem]   ">
                    Contact
                </h2>
            </div>}

            <div className="absolute w-[50%] h-[20%] bg-[#e02cad] rounded-full blur-[150px] top-[60%] left-[70%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="absolute w-[20%] h-[20%] bg-[#0550CF] rounded-full blur-[150px] top-[20%] left-[30%] transform -translate-x-[70%] -translate-y-1/2 " />

            <div className="text-center text-[7rem] font-extrabold mb-0 hidden lg:block ">
                <h2 className="relative text-gray-600/10">
                    Contact
                </h2>
                <h3 className="absolute text-indigo-500 text-[3rem] font-bold left-1/2 -translate-x-1/2 top-[8.5%]  ">
                    Contact Me
                </h3>
            </div>

            <div className="bg-black/30 flex px-1 sm:px-12 py-8 rounded-lg backdrop-blur-sm items-center gap-0 lg:gap-10  ">
                <div className=" lg:max-w-[450px] max-w-[400px] px-3 ">
                    <div className="  ">

                        <h2 className="text-[1.8rem] font-semibold">Let's Connect</h2>
                        <p className="text-[0.9rem] max-w-[380px]">Whether it's a project, a question, or just a friendly chat, I'm here. Let's connect!</p>
                        <form
                            onSubmit={handleSubmit(handleSend)}
                            noValidate
                            className="max-w-[380px] w-full "
                        >
                            <div className="w-full flex flex-col mt-8 ">
                                <div className="flex justify-between  items-center md:w-[309px]  ">


                                </div>

                                <div className="flex w-full relative">

                                    {errors.name && (

                                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                                    )}
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-3 py-[0.5rem] bg-gray-500/30 font-normal text-[14px] border-gray-500 border rounded-md mt-[6px]  text-gray-300 focus:outline-none focus:ring-0 autofill:bg-gray-500/30"
                                        {...register("name", {
                                            required: "Name is required",
                                        })}
                                    />
                                </div>

                            </div>

                            <div className="w-full ">
                                <div className="flex justify-between mt-4 items-center md:w-[309px] ">

                                </div>

                                <div className="flex w-full relative">

                                    {errors.email && (
                                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                                    )}
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="alexei@gmail.com"
                                        className=" px-3 py-[0.5rem] bg-gray-500/30 font-normal text-[14px] border-gray-500 border rounded-md mt-[6px]  text-gray-300  w-full focus:outline-none focus:ring-0"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Invalid E-mail",
                                            },
                                        })}
                                    />
                                </div>

                            </div>

                            <div className="w-full">
                                <div className="flex justify-between mt-4 items-center md:w-[309px]">

                                </div>

                                <div className="flex w-full relative ">

                                    {errors.phoneNumber && (
                                        <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
                                    )}
                                    <input
                                        id="phoneNumber"
                                        type="text"
                                        placeholder="+1 202-555-0136"
                                        className=" px-3 py-[0.5rem] bg-gray-500/30 font-normal text-[14px] text-gray-300 border-gray-500 border rounded-md mt-[6px] w-full focus:outline-none focus:ring-0"
                                        {...register("phoneNumber", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^\+?[0-9\s-]*$/,
                                                message: "Invalid phone number",
                                            },
                                        })}
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-col  ">
                                <div className="flex justify-between mt-4 items-center md:w-[309px] ">
                                </div>

                                <div className="flex w-full relative ">

                                    {errors.message && (
                                        <ErrorMessage>{errors.message.message}</ErrorMessage>
                                    )}
                                    <textarea
                                        id="message"
                                        placeholder="Write your message here"
                                        className=" px-3 bg-gray-500/30  py-[0.5rem] font-normal text-[14px] border-gray-500 border rounded-md mt-[6px]  text-gray-300 w-full h-24 resize-none focus:outline-none focus:ring-0"
                                        {...register("message", {
                                            required: "Message is required",
                                        })}
                                    />
                                </div>

                            </div>

                            <button
                                className=" bg-gradient-to-r  from-indigo-600 to-purple-600 px-4 py-2  rounded-md flex w-full mt-5 justify-center items-center "

                            >{loading ?

                                <MoonLoader
                                    color="#ffdf05"
                                    size={18}
                                />


                                : "Send"}</button>

                            <div className=" flex items-end justify-center">
                                <div className="mt-5">
                                    <ReCAPTCHA
                                        sitekey={siteKey}
                                        onChange={(value) => setCaptchaValue(value)}
                                    />
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dzeqwngmi/image/upload/fl_preserve_transparency/v1742559621/astronaut_st7am4.jpg"
                        alt="astronaut"
                        className="max-w-[500px] rounded-lg hidden lg:block "
                    />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}
