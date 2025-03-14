import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";


export default function AppLayout() {
    return (
        <div className="relative">
            {/* <div className="absolute  text-white z-50 left-1/2 top-[10%] -translate-x-1/2">MK</div> */}
            <section className="min-h-screen bg-neutral-900">
                <Outlet />
            </section>
            <Menu />
        </div>
    )
}
