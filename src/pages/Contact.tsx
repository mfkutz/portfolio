import { useForm } from "react-hook-form"
import { UserDataForm } from "../types"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import sendEmail from "../emails/email"
import { Bounce, toast, ToastContainer } from "react-toastify"

export default function Contact() {

    const initialValues: UserDataForm = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserDataForm>({ defaultValues: initialValues })

    const handleSend = async (data: UserDataForm) => {
        try {
            await sendEmail(data)
            toast("Email Sent")
            reset()
        } catch (error) {
            console.error("Error enviando email", error)
            toast("Error sending Email")
        }
    }


    return (
        <div className='h-screen  text-white flex flex-col items-center '>
            <h1 className="text-[3.5rem] font-extrabold bg-gradient-to-r from-white to bg-purple-400 bg-clip-text text-transparent mt-3">Get in touch</h1>
            <span className="text-[1.4rem]">Reach out, and let's create a universe of possibilities together!</span>
            <div className="bg-black/30 flex px-12 py-8 mt-7 rounded-lg backdrop-blur-sm items-center ">
                <div className=" max-w-[450px]">
                    <div className="">

                        <h2 className="text-[1.8rem] font-semibold">Let's connect constellations</h2>
                        <p className="text-[0.9rem]">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                        <form
                            onSubmit={handleSubmit(handleSend)}
                            noValidate
                            className="max-w-[380px] w-full"
                        >
                            <div className="w-full flex flex-col mt-8 ">
                                <div className="flex justify-between  items-center md:w-[309px] ">

                                </div>
                                {errors.name && (

                                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                                )}
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className=" px-3 py-[0.5rem] bg-gray-500/30 font-normal text-[14px] border-gray-500 border rounded-md mt-[6px]  text-gray-300 focus:outline-none focus:ring-0"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                />

                            </div>

                            <div className="w-full ">
                                <div className="flex justify-between mt-4 items-center md:w-[309px] ">

                                </div>
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

                            <div className="w-full">
                                <div className="flex justify-between mt-4 items-center md:w-[309px]">

                                </div>
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

                            <div className="w-full flex flex-col  ">
                                <div className="flex justify-between mt-4 items-center md:w-[309px] ">
                                </div>
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

                            <button
                                className=" bg-gradient-to-r  from-indigo-600 to-purple-600 px-4 py-2  rounded-md flex w-full mt-5 justify-center items-center "
                            >Send to the moon</button>

                        </form>
                    </div>

                </div>
                <div>
                    <img
                        src="/astronaut.webp"
                        alt="astronaut"
                        className="max-w-[500px] rounded-lg"
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
