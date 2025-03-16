import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const siteKey = import.meta.env.VITE_TEST_SITE_KEY

export default function router() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<Home />} index />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GoogleReCaptchaProvider>
    )
}
