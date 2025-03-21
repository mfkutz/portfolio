import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";

export default function AppLayout() {
    return (
        <div className="relative">
            <section className="min-h-screen bg-neutral-900">
                <Outlet />
            </section>
            <Menu />
        </div>
    )
}
