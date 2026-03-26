import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import AppLayout from "./layouts/AppLayout"
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner"

const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))
const About = lazy(() => import("./pages/About"))

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>

                    <Route path="/" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Home />
                        </Suspense>
                    } index />


                    <Route path="/projects" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Projects />
                        </Suspense>
                    } />

                    <Route path="/contact" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Contact />
                        </Suspense>
                    } />


                    <Route path="/about" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <About />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}
